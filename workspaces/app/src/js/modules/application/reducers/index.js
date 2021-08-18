import { ctxToObject } from 'helpers/context'

export default ctxToObject(
  require.context('./', true, /\.\/\w+(?<!index)\.js$/)
)
