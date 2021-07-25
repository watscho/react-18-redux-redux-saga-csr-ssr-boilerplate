import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ArticleList } from './ArticleList'

export const Articles = () => {
  const { t } = useTranslation()

  console.log('render - Articles')

  return (
    <>
      <Link to="/">{t('home')}</Link>
      <h1>{t('articles')}</h1>
      <ArticleList />
    </>
  )
}
