import { ctxToObject } from '@/helpers/context'

const modules = ctxToObject(
  require.context('./', true, /\.\/(helmets|views)\/\w+\.tsx$/)
)

export default {
  path: '/',
  element: <modules.Home />
}
