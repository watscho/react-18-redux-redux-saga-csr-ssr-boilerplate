import { ctxToObject } from 'helpers/context'

import { postsFetchRequested, postFetchRequested } from './actions'

const modules = ctxToObject(
  require.context('./', true, /\.\/(helmets|views)\/\w+\.jsx$/)
)

export default [
  {
    path: 'posts',
    element: <modules.Posts />,
    dispatch: ({ store: { dispatch } }) => dispatch(postsFetchRequested())
  },
  {
    path: 'posts/:id/view',
    element: <modules.PostView />,
    dispatch: ({ store: { dispatch }, req }) =>
      dispatch(postFetchRequested(req.params))
  }
]
