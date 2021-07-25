import {
  ARTICLES_FETCH_REQUESTED,
  ARTICLES_FETCH_SUCCEEDED,
  ARTICLES_FETCH_FAILED,
  RESET_ARTICLES
} from './types'

export const articlesFetchRequested = () => ({
  type: ARTICLES_FETCH_REQUESTED
})

export const articlesFetchSucceeded = content => ({
  type: ARTICLES_FETCH_SUCCEEDED,
  payload: content
})

export const articlesFetchFailed = content => ({
  type: ARTICLES_FETCH_FAILED,
  payload: content
})

export const resetArticles = () => ({
  type: RESET_ARTICLES
})
