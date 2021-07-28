import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { postsFetchRequested, resetPosts } from 'modules/posts/actions'

export const usePostsService = () => {
  const dispatch = useDispatch()

  const posts = useSelector(({ posts }) => posts, shallowEqual)

  useEffect(() => {
    dispatch(postsFetchRequested())

    return () => {
      dispatch(resetPosts())
    }
  }, [dispatch])

  return { posts }
}
