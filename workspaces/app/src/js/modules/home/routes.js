import { ctxToObject } from 'helpers/context'

const modules = ctxToObject(
  require.context('./', true, /\.\/(helmets|views)\/\w+\.jsx$/)
)

export default {
  path: '/',
  element: <modules.Home />
}
