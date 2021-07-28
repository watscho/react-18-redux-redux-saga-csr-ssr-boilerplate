import { useTranslation } from 'react-i18next'

import { PostList } from './PostList'

import scss from 'scss/modules/posts'

export const Posts = () => {
  const { t } = useTranslation()

  console.log('render - Posts')

  return (
    <div className={scss.posts}>
      <h1 className={scss.title}>{t('posts')}</h1>
      <PostList />
    </div>
  )
}
