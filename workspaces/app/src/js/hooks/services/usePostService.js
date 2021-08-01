import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { postFetchRequested, resetPost } from 'modules/posts/actions'

export const usePostService = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const post = useSelector(({ post }) => post, shallowEqual)

  useEffect(() => {
    dispatch(postFetchRequested({ id }))

    return () => {
      dispatch(resetPost())
    }
  }, [dispatch, id])

  return { post }
}
