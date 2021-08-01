import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()

  console.log('render - Home')

  return (
    <div className="home">
      <h1>{t('home')}</h1>
    </div>
  )
}
