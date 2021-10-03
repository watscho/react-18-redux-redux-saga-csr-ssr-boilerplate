import { useTranslation } from 'react-i18next'

import { Helmet } from '@/components'
import { Posts } from '../views/Posts'

export default () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet title={t('postsPage')} description="Posts page description" />
      <Posts />
    </>
  )
}
