import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  postsFetchSucceeded,
  postsFetchFailed,
  postsFetchRequested,
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

import { postService } from 'services'

function* fetchPosts() {
  try {
    const posts = yield select(({ posts }) => posts)

    if (!posts.loading) return

    const response = yield call(postService.fetchPosts)

    yield put(postsFetchSucceeded({ data: response.data }))
  } catch (errors) {
    yield put(postsFetchFailed({ errors }))
  }
}

function* createPost({ payload }) {
  try {
    const response = yield call(postService.createPost, { payload })

    yield put(postCreateSucceeded({ data: response.data }))
  } catch (errors) {
    yield put(postCreateFailed({ errors }))
  }
}

function* updatePost({ payload }) {
  try {
    const response = yield call(postService.updatePost, { payload })

    yield put(postUpdateSucceeded({ data: response.data }))
  } catch (errors) {
    yield put(postUpdateFailed({ errors }))
  }
}

function* deletePost({ payload }) {
  try {
    const response = yield call(postService.deletePost, { payload })

    yield put(postDeleteSucceeded({ data: response.data }))
  } catch (errors) {
    yield put(postDeleteFailed({ errors }))
  }
}

export default function* watcher() {
  const actions = {
    [postsFetchRequested().type]: fetchPosts,
    [postCreateRequested().type]: createPost,
    [postUpdateRequested().type]: updatePost,
    [postDeleteRequested().type]: deletePost
  }

  while (true) {
    const { type, payload } = yield take([
      postsFetchRequested().type,
      postCreateRequested().type,
      postUpdateRequested().type,
      postDeleteRequested().type
    ])

    yield fork(actions[type], { payload })
  }
}
