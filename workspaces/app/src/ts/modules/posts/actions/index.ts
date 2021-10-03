import {
  POSTS_FETCH_REQUESTED,
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_FAILED,
  POST_FETCH_REQUESTED,
  POST_FETCH_SUCCEEDED,
  POST_FETCH_FAILED,
  POST_CREATE_REQUESTED,
  POST_CREATE_SUCCEEDED,
  POST_CREATE_FAILED,
  POST_UPDATE_REQUESTED,
  POST_UPDATE_SUCCEEDED,
  POST_UPDATE_FAILED,
  POST_DELETE_REQUESTED,
  POST_DELETE_SUCCEEDED,
  POST_DELETE_FAILED,
  RESET_POSTS,
  RESET_POST
} from './types'

export const postsFetchRequested = () => ({
  type: POSTS_FETCH_REQUESTED
})
export const postsFetchSucceeded = (content: any) => ({
  type: POSTS_FETCH_SUCCEEDED,
  payload: content
})
export const postsFetchFailed = (content: any) => ({
  type: POSTS_FETCH_FAILED,
  payload: content
})

export const postFetchRequested = (content: any) => ({
  type: POST_FETCH_REQUESTED,
  payload: content
})
export const postFetchSucceeded = (content: any) => ({
  type: POST_FETCH_SUCCEEDED,
  payload: content
})
export const postFetchFailed = (content: any) => ({
  type: POST_FETCH_FAILED,
  payload: content
})

export const postCreateRequested = (content: any) => ({
  type: POST_CREATE_REQUESTED,
  payload: content
})
export const postCreateSucceeded = (content: any) => ({
  type: POST_CREATE_SUCCEEDED,
  payload: content
})
export const postCreateFailed = (content: any) => ({
  type: POST_CREATE_FAILED,
  payload: content
})

export const postUpdateRequested = (content: any) => ({
  type: POST_UPDATE_REQUESTED,
  payload: content
})
export const postUpdateSucceeded = (content: any) => ({
  type: POST_UPDATE_SUCCEEDED,
  payload: content
})
export const postUpdateFailed = (content: any) => ({
  type: POST_UPDATE_FAILED,
  payload: content
})

export const postDeleteRequested = (content: any) => ({
  type: POST_DELETE_REQUESTED,
  payload: content
})
export const postDeleteSucceeded = (content: any) => ({
  type: POST_DELETE_SUCCEEDED,
  payload: content
})
export const postDeleteFailed = (content: any) => ({
  type: POST_DELETE_FAILED,
  payload: content
})

export const resetPosts = () => ({
  type: RESET_POSTS
})

export const resetPost = () => ({
  type: RESET_POST
})
