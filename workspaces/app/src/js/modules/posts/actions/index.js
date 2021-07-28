import {
  POSTS_FETCH_REQUESTED,
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_FAILED,
  RESET_POSTS
} from './types'

export const postsFetchRequested = () => ({
  type: POSTS_FETCH_REQUESTED
})

export const postsFetchSucceeded = content => ({
  type: POSTS_FETCH_SUCCEEDED,
  payload: content
})

export const postsFetchFailed = content => ({
  type: POSTS_FETCH_FAILED,
  payload: content
})

export const resetPosts = () => ({
  type: RESET_POSTS
})
