import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { t } = useTranslation()

  console.log('render - Home')

  return (
    <div className="home">
      <Link to="posts">{t('posts')}</Link>
      <h1>{t('home')}</h1>
    </div>
  )
}
