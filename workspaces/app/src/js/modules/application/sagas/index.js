import { ctxImportToArray } from 'helpers/context'

export default ctxImportToArray(
  require.context('./', true, /\.\/\w+(?<!index)\.js$/)
)
