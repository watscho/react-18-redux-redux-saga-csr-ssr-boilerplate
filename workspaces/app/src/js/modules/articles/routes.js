import { ctxImportToObject } from 'helpers/context'

import { articlesFetchRequested } from './actions'

const modules = ctxImportToObject([
  require.context('./', true, /\.\/views\/\w+\.jsx$/),
  require.context('./', true, /\.\/helmets\/\w+\.jsx$/)
])

export default [
  {
    exact: true,
    path: 'articles',
    element: <modules.Articles />,
    dispatch: ({ store: { dispatch } }) => dispatch(articlesFetchRequested())
  }
]
