import { useTranslation } from 'react-i18next'

import { Helmet } from 'components'
import { Home } from '../views/Home'

export default () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet title={t('homePage')} description="Home page description" />
      <Home />
    </>
  )
}
