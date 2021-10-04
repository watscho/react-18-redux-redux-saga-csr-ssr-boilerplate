import * as ReactDOM  from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import Cookies from 'universal-cookie'

import { initLocales } from '@/i18n'

import { App } from '@/App'
import { configureStore } from '@/redux'
import { rootSaga } from '@/redux/sagas'
import { register } from '@/service-worker'

declare global {
  interface Window {
    __REDUX_STATE__: any
  }
}

initLocales()

const { store } = configureStore({
  ...window.__REDUX_STATE__,
  cookies: new Cookies().getAll()
})

store.runSaga(rootSaga)

const Bootstrap: React.FC = (): React.ReactElement => (
  <CookiesProvider>
    <BrowserRouter>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <App/>
        </ReduxProvider>
      </HelmetProvider>
    </BrowserRouter>
  </CookiesProvider>
)

const container: HTMLDivElement | null = document.querySelector('div')

if (!container) {
  throw new Error("The element wasn't found");
}

!process.env.SSR
  ? ReactDOM.createRoot(container).render(<Bootstrap />)
  : //ReactDOM.hydrateRoot(container, <Bootstrap />)

register()