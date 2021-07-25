import { appDataFetchRequested } from 'modules/application/actions'

export const dispatchEarly = ({ store }) => {
  const appData = new Promise(resolve => {
    store.dispatch(appDataFetchRequested({ promise: { resolve } }))
  })

  return Promise.all([appData])
}
