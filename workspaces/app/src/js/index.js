import { createRoot, hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider } from 'react-cookie'

import 'app/i18n'

import { App } from 'app/App'
import { configureStore } from 'app/redux'
import { rootSaga } from 'app/redux/sagas'
import { register, unregister } from 'app/service-worker'

const { store } = configureStore(window.__REDUX_STATE__)

store.runSaga(rootSaga)

const Bootstrap = () => (
  <CookiesProvider>
    <BrowserRouter>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </HelmetProvider>
    </BrowserRouter>
  </CookiesProvider>
)

const container = document.querySelector('div')

module.hot
  ? createRoot(container).render(<Bootstrap />)
  : hydrateRoot(container, <Bootstrap />)

register()
