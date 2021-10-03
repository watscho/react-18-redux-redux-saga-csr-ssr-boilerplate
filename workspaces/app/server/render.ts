import { configureStore } from '../src/ts/redux'

import { reactApp } from './reactApp'
import { dispatchEarly } from './dispatchEarly'
import { dispatchSagas } from './dispatchSagas'
import { runSaga } from './runSaga'

export const render = async (req: any, res: any) => {
  const { store } = configureStore({
    cookies: req.universalCookies.cookies
  })

  runSaga(res, { store, ...reactApp(req, res, { store }) })

  await dispatchEarly({ store })

  dispatchSagas({ req, store })

  store.close()
}
