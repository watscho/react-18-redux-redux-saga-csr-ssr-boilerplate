import { ctxToObject, ctxToArray } from 'helpers/context'

export const modules = ctxToObject(
  require.context('./', true, /\.\/\w+\/index\.js$/)
)

export const routes = ctxToArray(
  require.context('./', true, /\.\/\w+\/routes\.js$/)
)

export const reducers = ctxToObject(
  require.context('./', true, /\.\/\w+\/reducers\/index\.js$/)
)

export const sagas = ctxToArray(
  require.context('./', true, /\.\/\w+\/sagas\/index\.js$/)
)
