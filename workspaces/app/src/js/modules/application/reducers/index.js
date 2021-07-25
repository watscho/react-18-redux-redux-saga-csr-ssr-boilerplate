import { ctxImportToObject } from 'helpers/context'

export default ctxImportToObject(
  require.context('./', true, /\.\/\w+(?<!index)\.js$/)
)
