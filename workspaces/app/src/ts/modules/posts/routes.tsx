import { ctxToObject } from '@/helpers/context'

import { postsFetchRequested, postFetchRequested } from './actions'

const modules = ctxToObject(
  require.context('./', true, /\.\/(helmets|views)\/\w+\.tsx$/)
)

export default [
  {
    path: 'posts',
    element: <modules.Posts />,
    dispatch: ({ store: { dispatch } }: any) => dispatch(postsFetchRequested())
  },
  {
    path: 'posts/:id/view',
    element: <modules.PostView />,
    dispatch: ({ store: { dispatch }, req } : any) =>
      dispatch(postFetchRequested(req.params))
  }
]
