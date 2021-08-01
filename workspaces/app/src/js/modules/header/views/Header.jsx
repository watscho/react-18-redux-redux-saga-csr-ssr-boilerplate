import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t } = useTranslation()

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink to="posts" end>
              {t('posts')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
