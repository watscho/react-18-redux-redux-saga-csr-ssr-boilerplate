import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet-async'

import { Application } from '../views/Application'

import { setCookies } from '../actions'
import { useAuthService, useAppDataService } from 'hooks/services'
import { useTranslation } from 'react-i18next'

const DepInject = () => {
  useAuthService()

  useAppDataService()

  const dispatch = useDispatch()

  const [cookies] = useCookies()

  useEffect(() => {
    dispatch(setCookies(cookies))
  }, [dispatch, cookies])

  return null
}

export default () => {
  const {
    i18n: { language: locale }
  } = useTranslation()

  return (
    <>
      <DepInject />
      <Helmet htmlAttributes={{ lang: locale }} />
      <Application />
    </>
  )
}
