import { useTranslation } from 'react-i18next'

import { PostCreateBlock } from './PostCreateBlock'
import { PostList } from './PostList'

import scss from 'scss/modules/posts'

export const Posts = () => {
  const { t } = useTranslation()

  return (
    <div className={scss.posts}>
      <PostCreateBlock />
      <h1 className={scss.title}>{t('posts')}</h1>
      <PostList />
    </div>
  )
}
