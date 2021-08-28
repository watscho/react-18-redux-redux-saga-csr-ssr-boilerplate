import { useTranslation } from 'react-i18next'

import { Helmet } from 'components'
import { PostView } from '../views/PostView'

import { usePostService } from 'hooks/services'

export default () => {
  const { t } = useTranslation()

  const {
    post: { byId, allIds }
  } = usePostService()

  const post = byId[allIds]

  return (
    <>
      <Helmet
        title={t('postViewPage', { title: post?.title || '...' })}
        description="Post view page description"
      />
      <PostView />
    </>
  )
}
