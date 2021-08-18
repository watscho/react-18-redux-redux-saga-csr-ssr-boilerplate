import { ctxToSvg } from 'helpers/context'

export const icons = ctxToSvg(
  require.context('!!svg-inline-loader!imgs', true, /^\.\/.*\.svg$/)
)
