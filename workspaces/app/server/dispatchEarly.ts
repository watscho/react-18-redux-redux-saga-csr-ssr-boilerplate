import { appDataFetchRequested } from '../src/ts/modules/application/actions'

export const dispatchEarly = ({ store }: any) => {
  const appData = new Promise(resolve => {
    store.dispatch(appDataFetchRequested({ promise: { resolve } }))
  })

  return Promise.all([appData])
}
