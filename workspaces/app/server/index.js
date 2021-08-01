import path from 'path'
import express from 'express'
import cookiesMiddleware from 'universal-cookie-express'
import i18nextMiddleware from 'i18next-http-middleware'

import { i18n } from 'app/i18n'

import { render } from './render'

const app = express()

i18n.use(i18nextMiddleware.LanguageDetector).init(() =>
  app
    .disable('x-powered-by')
    .use('/', express.static(path.resolve(__dirname)))
    .use(i18nextMiddleware.handle(i18n))
    .use(cookiesMiddleware())
    .get('*', render)
)

app.listen(3000)
