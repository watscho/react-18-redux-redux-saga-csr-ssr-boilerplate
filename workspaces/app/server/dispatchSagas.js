import { matchRoutes } from 'react-router-dom'

import { routes } from 'modules'

import { authFetchRequested } from 'modules/application/actions'

export const dispatchSagas = ({ req, store }) => {
  const branch = matchRoutes(routes, req.path)

  store.dispatch(authFetchRequested())

  for (let i = 0; i < branch.length; i++) {
    const { route, params } = branch[i]

    route.dispatch &&
      route.dispatch({
        store,
        req: { search: req.query, params }
      })
  }
}
