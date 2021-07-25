import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { authFetchRequested } from 'modules/application/actions'

export const useAuthService = () => {
  const dispatch = useDispatch()

  const auth = useSelector(({ auth }) => auth, shallowEqual)

  useEffect(() => {
    dispatch(authFetchRequested())
  }, [dispatch])

  return { auth }
}
