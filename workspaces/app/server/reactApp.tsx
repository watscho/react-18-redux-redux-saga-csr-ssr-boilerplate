import { StaticRouter } from 'react-router-dom/server'
import { Provider as ReduxProvider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider } from 'react-cookie'
import { I18nextProvider } from 'react-i18next'

import { App } from '../src/ts/App'

export const reactApp = (req: any, res: any, { store }: any) => {
  let context: any = {}
  let helmetContext: any = {}

  const app = (
    <I18nextProvider i18n={req.i18n}>
      <CookiesProvider cookies={req.universalCookies}>
        {/* context={context} */}
        <StaticRouter location={req.url}>
          <HelmetProvider context={helmetContext}>
            <ReduxProvider store={store}>
              <App />
            </ReduxProvider>
          </HelmetProvider>
        </StaticRouter>
      </CookiesProvider>
    </I18nextProvider>
  )

  if (context.url) return res.redirect(context.url)

  return { app, helmetContext }
}
