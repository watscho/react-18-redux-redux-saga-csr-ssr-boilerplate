import { matchRoutes } from 'react-router-dom'

import { routes } from '../src/ts/modules'

import { authFetchRequested } from '../src/ts/modules/application/actions'

export const dispatchSagas = ({ req, store }: any) => {
  const branch: any = matchRoutes(routes, req.path)

  store.dispatch(authFetchRequested())

  for (let i = 0; i < branch?.length; i++) {
    const { route, params }: any = branch[i]

    route.dispatch &&
      route.dispatch({
        store,
        req: { search: req.query, params }
      })
  }
}
