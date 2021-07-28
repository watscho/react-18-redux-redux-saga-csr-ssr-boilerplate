import { ctxImportToObject } from 'helpers/context'

import { postsFetchRequested } from './actions'

const modules = ctxImportToObject([
  require.context('./', true, /\.\/views\/\w+\.jsx$/),
  require.context('./', true, /\.\/helmets\/\w+\.jsx$/)
])

export default [
  {
    exact: true,
    path: 'posts',
    element: <modules.Posts />,
    dispatch: ({ store: { dispatch } }) => dispatch(postsFetchRequested())
  }
]
