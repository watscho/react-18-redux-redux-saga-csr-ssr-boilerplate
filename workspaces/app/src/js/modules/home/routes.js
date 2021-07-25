import { ctxImportToObject } from 'helpers/context'

const modules = ctxImportToObject([
  require.context('./', true, /\.\/views\/\w+\.jsx$/),
  require.context('./', true, /\.\/helmets\/\w+\.jsx$/)
])

export default [
  {
    exact: true,
    path: '/',
    element: <modules.Home />
  }
]
