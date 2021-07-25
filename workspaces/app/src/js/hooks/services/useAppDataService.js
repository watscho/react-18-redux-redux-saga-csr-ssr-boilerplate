import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { appDataFetchRequested } from 'modules/application/actions'

export const useAppDataService = () => {
  const dispatch = useDispatch()

  const appData = useSelector(({ appData }) => appData, shallowEqual)

  useEffect(() => {
    dispatch(appDataFetchRequested())
  }, [dispatch])

  return { appData }
}
