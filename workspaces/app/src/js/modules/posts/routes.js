import { ctxImportToObject } from 'helpers/context'

import { postsFetchRequested } from './actions'

const modules = ctxImportToObject([
  require.context('./', true, /\.\/views\/\w+\.jsx$/),
  require.context('./', true, /\.\/helmets\/\w+\.jsx$/)
])

export default [
  {
    path: 'posts',
    element: <modules.Posts />,
    dispatch: ({ store: { dispatch } }) => dispatch(postsFetchRequested())
  }
]
