import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { articlesFetchRequested, resetArticles } from 'modules/articles/actions'

export const useArticlesService = () => {
  const dispatch = useDispatch()

  const articles = useSelector(({ articles }) => articles, shallowEqual)

  useEffect(() => {
    dispatch(articlesFetchRequested())

    return () => {
      dispatch(resetArticles())
    }
  }, [dispatch])

  return { articles }
}
