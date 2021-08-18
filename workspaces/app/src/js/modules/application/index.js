import { ctxToObject } from 'helpers/context'

export default ctxToObject(
  require.context('./', true, /\.\/(helmets|views)\/\w+\.jsx$/)
)
