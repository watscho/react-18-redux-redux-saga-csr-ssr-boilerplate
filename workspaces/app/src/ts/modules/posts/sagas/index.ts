import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  postsFetchSucceeded,
  postsFetchFailed,
  postsFetchRequested,
  postFetchSucceeded,
  postFetchFailed,
  postFetchRequested,
  postCreateSucceeded,
  postCreateFailed,
  postCreateRequested,
  postUpdateSucceeded,
  postUpdateFailed,
  postUpdateRequested,
  postDeleteSucceeded,
  postDeleteFailed,
  postDeleteRequested
} from '../actions'

import { postService } from '@/services'

function* fetchPosts() {
  try {
    const posts: { [key: string]: any } = yield select(({ posts }) => posts)
    if (!posts.loading) return
    
    const response: { [key: string]: any } = yield call(postService.fetchPosts)

    yield put(postsFetchSucceeded({ ...response.data }))
  } catch (errors) {
    yield put(postsFetchFailed({ errors }))
  }
}

function* fetchPost({ payload }: any) {
  try {
    const post: { [key: string]: any } = yield select(({ post }) => post)

    if (post.allIds && parseInt(post.allIds) === parseInt(payload.id)) return

    const response: { [key: string]: any } = yield call(postService.fetchPost, { payload })

    yield put(postFetchSucceeded({ ...response.data }))
  } catch (errors) {
    yield put(postFetchFailed({ errors }))
  }
}

function* createPost({ payload }: any) {
  try {
    const response: { [key: string]: any } = yield call(postService.createPost, { payload })

    yield put(postCreateSucceeded({ ...response.data }))

    yield call(payload.reset)
  } catch (errors) {
    yield put(postCreateFailed({ errors }))
  }
}

function* updatePost({ payload }: any) {
  try {
    const response: { [key: string]: any } = yield call(postService.updatePost, { payload })

    yield put(postUpdateSucceeded({ ...response.data }))

    yield call(payload.hideUpdateBlock)
  } catch (errors) {
    yield put(postUpdateFailed({ errors }))
  }
}

function* deletePost({ payload }: any) {
  try {
    const response: { [key: string]: any } = yield call(postService.deletePost, { payload })

    yield put(postDeleteSucceeded({ ...response.data }))
  } catch (errors) {
    yield put(postDeleteFailed({ errors }))
  }
}

export default function* watcher() {
  const actions = {
    [postsFetchRequested().type]: fetchPosts,
    [postFetchRequested(0).type]: fetchPost,
    [postCreateRequested(0).type]: createPost,
    [postUpdateRequested(0).type]: updatePost,
    [postDeleteRequested(0).type]: deletePost
  }

  while (true) {
    const { type, payload } = yield take([
      postsFetchRequested().type,
      postFetchRequested(0).type,
      postCreateRequested(0).type,
      postUpdateRequested(0).type,
      postDeleteRequested(0).type
    ])

    yield fork(actions[type], { payload })
  }
}
