import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t } = useTranslation()

  return (
    <header>
      <Link to="/">{t('home')}</Link>
      <Link to="posts">{t('posts')}</Link>
    </header>
  )
}
