import { ctxImportToObject, ctxImportToArray } from 'helpers/context'

const mergeValues = true

export const modules = ctxImportToObject(
  require.context('./', true, /\.\/\w+\/index\.js$/),
  { mergeValues }
)

export const routes = ctxImportToArray(
  require.context('./', true, /\.\/\w+\/routes\.js$/),
  { mergeValues }
)

export const reducers = ctxImportToObject(
  require.context('./', true, /\.\/\w+\/reducers\/index\.js$/),
  { mergeValues }
)

export const sagas = ctxImportToArray(
  require.context('./', true, /\.\/\w+\/sagas\/index\.js$/),
  { mergeValues }
)
