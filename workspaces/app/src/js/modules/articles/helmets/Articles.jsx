import { useTranslation } from 'react-i18next'

import { Helmet } from 'components'
import { Articles } from '../views/Articles'

export default () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet
        title={t('articlesPage')}
        description="Articles page description"
      />
      <Articles />
    </>
  )
}
