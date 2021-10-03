import { renderToString } from 'react-dom/server'

import { rootSaga } from '../src/ts/redux/sagas'

import { reduxState } from './reduxState'
import { readEntry } from './readEntry'

export const runSaga = (res: any, { store, app, helmetContext }: any) =>
  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => {
      const { reduxStore } = reduxState({ store })
      const html = renderToString(app)
      const { helmet } = helmetContext

      readEntry(res, { helmet, reduxStore, html })
    })
