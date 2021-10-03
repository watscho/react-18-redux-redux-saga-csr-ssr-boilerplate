import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { appDataFetchRequested } from '@/modules/application/actions'

export const useAppDataService = () => {
  const dispatch = useDispatch()

  const appData = useSelector(({ appData }: any) => appData, shallowEqual)

  useEffect(() => {
    dispatch(appDataFetchRequested(0))
  }, [dispatch])

  return { appData }
}
