import { configureStore } from 'app/redux'

import { reactApp } from './reactApp'
import { dispatchEarly } from './dispatchEarly'
import { dispatchSagas } from './dispatchSagas'
import { runSaga } from './runSaga'

export const render = async (req, res) => {
  const { store } = configureStore({
    cookies: req.universalCookies.cookies
  })

  runSaga(res, { store, ...reactApp(req, res, { store }) })

  await dispatchEarly({ store })

  dispatchSagas({ req, store })

  store.close()
}
