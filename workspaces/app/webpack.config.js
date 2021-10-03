'use strict'

const fs = require('fs')
const path = require('path')
const {
  DefinePlugin,
  IgnorePlugin,
  WatchIgnorePlugin,
  HotModuleReplacementPlugin,
  optimize: { ModuleConcatenationPlugin }
} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const Dotenv = require('dotenv-webpack')
const NodemonPlugin = require('nodemon-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const postcssSafeParser = require('postcss-safe-parser')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const WebpackPwaManifest = require('@f-fjs/webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin-stzhang')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const pwaManifest = require('./public/manifest.json')

const abs = str => path.resolve(__dirname, str)
const wsAbs = str => path.resolve(abs('../..'), str)

const appName = 'react-18-redux-redux-saga-csr-ssr-boilerplate'
const mode = process.env.NODE_ENV || 'development'
const isProduction = mode === 'production'
const useSourceMap = !isProduction
const isSSR = !!process.env.SSR

const patterns = {
  name: '[name]',
  nameExt: '[name][ext]',
  nameFullhash: '[name]-[fullhash]',
  nameContenthash: '[name]-[contenthash]',
  id: '[id]',
  idContenthash: '[id]-[contenthash]',
  hashExtQuery: '[hash][ext][query]',
  hashBase64: '[hash:base64]',
  localHashBase645: '[local]--[hash:base64:5]'
}

const paths = {
  public: '/',
  asset: isProduction
    ? `assets/${patterns.hashExtQuery}`
    : `assets/${patterns.nameExt}`,
  css: isProduction
    ? `css/${patterns.nameContenthash}.css`
    : `css/${patterns.name}.css`,
  cssChunk: isProduction
    ? `css/${patterns.idContenthash}.css`
    : `css/${patterns.id}.css`,
  js: isProduction
    ? `js/${patterns.nameFullhash}.js`
    : `js/${patterns.name}.js`,
  serverJs: isProduction ? `${patterns.nameFullhash}.js` : `${patterns.name}.js`
}

const loaders = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: 'ts-loader'
  },
  {
    test: /\.(css|s[ac]ss)$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      "@teamsupercell/typings-for-css-modules-loader",
      {
        loader: 'css-loader',
        options: {
          sourceMap: useSourceMap,
          modules: {
            localIdentName: isProduction
              ? patterns.hashBase64
              : patterns.localHashBase645,
            exportLocalsConvention: 'camelCaseOnly'
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: useSourceMap
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: useSourceMap,
          postcssOptions: {
            parser: 'postcss-scss',
            plugins: [
              postcssFlexbugsFixes,
              [
                'postcss-preset-env',
                {
                  autoprefixer: {
                    flexbox: 'no-2009'
                  },
                  stage: 3
                }
              ]
            ]
          }
        }
      },
      'import-glob-loader'
    ]
  },
  {
    test: /\.(jpe?g|png|gif|ttf|eot|svg|woff?2)$/,
    type: 'asset/resource'
  },
  {
    resourceQuery: /raw/,
    type: 'asset/source'
  }
]

const plugins = [
  new MiniCssExtractPlugin({
    filename: paths.css,
    chunkFilename: paths.cssChunk
  }),
  new Dotenv({
    path: abs('.env'),
    safe: true
  }),
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(mode)
  }),
  new IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/
  }),
  new WatchIgnorePlugin({
    paths: [/scss\.d\.ts$/]
  }),
  isProduction &&
    new PreloadWebpackPlugin({
      as: 'font',
      include: 'allAssets',
      fileWhitelist: [/\.woff2/]
    }),
  isProduction && new ModuleConcatenationPlugin()
].filter(Boolean)

const devServer = {
  static: {
    directory: abs('public'),
  },
  compress: true,
  host: 'localhost',
  port: 3000,
  historyApiFallback: true,
  https: false,
  onBeforeSetupMiddleware: () => fs.rm(wsAbs('./public'), { recursive: true }, () => {})
}

const htmlWebpackPlugin = {
  inject: true,
  hash: true,
  minify: isProduction,
  title: appName,
  filename: isSSR ? 'index' : 'index.html',
  favicon: abs('public/favicon.ico'),
  template: abs('src/ts/entry/template.ejs'),
  publicPath: paths.public
}

const config = {
  mode,
  optimization: {
    usedExports: true,
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        extractComments: false,
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        }
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          processorOptions: {
            parser: postcssSafeParser
          },
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              minifyFontValues: { removeQuotes: false }
            }
          ]
        },
        minify: CssMinimizerPlugin.cleanCssMinify
      })
    ],
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: ({ name }) => `runtime-${name}`
    }
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify')
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    plugins:[
      new TsconfigPathsPlugin({ configFile: abs('tsconfig.json') })
    ]
  },
  context: __dirname,
  devtool: useSourceMap ? 'source-map' : false
}

const client = {
  name: 'client',
  target: 'web',
  entry: abs('src/ts'),
  output: {
    path: wsAbs('public'),
    filename: paths.js,
    publicPath: paths.public,
    assetModuleFilename: paths.asset
  },
  module: {
    rules: [...loaders]
  },
  plugins: [
    new RemovePlugin({
      before: {
        root: wsAbs('.'),
        include: ['public'],
        recursive: true
      }
    }),
    !isProduction && new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(htmlWebpackPlugin),
    isProduction &&
      new CopyPlugin({
        patterns: [{ from: abs('public/robots.txt'), to: patterns.nameExt }]
      }),
    new WebpackPwaManifest(pwaManifest),
    isProduction &&
      new WebpackAssetsManifest({
        entrypoints: true,
        publicPath: paths.public,
        output: 'assets-manifest.json',
        customize: entry => {
          if (entry.key.toLowerCase().endsWith('.map')) {
            return false
          }
          return entry
        }
      }),
    isProduction &&
      new InjectManifest({
        swSrc: abs('src/ts/service-worker.ts'),
        dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
        exclude: [/asset-manifest\.json$/],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      }),
    ...plugins
  ].filter(Boolean),
  devServer,
  ...config
}

const server = {
  name: 'server',
  target: 'node',
  entry: abs('server'),
  output: {
    path: wsAbs('public'),
    filename: paths.serverJs,
    publicPath: paths.public,
    assetModuleFilename: paths.asset
  },
  module: {
    rules: [...loaders]
  },
  plugins: [
    new NodemonPlugin({
      script: wsAbs('public/main.js'),
      watch: abs('server'),
      ext: 'js'
    }),
    ...plugins
  ],
  externals: [nodeExternals()],
  ...config
}

module.exports = [client, isSSR && server].filter(Boolean)
