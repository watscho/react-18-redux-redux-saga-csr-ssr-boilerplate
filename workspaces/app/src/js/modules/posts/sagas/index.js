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

import { postService } from 'services'

function* fetchPosts() {
  try {
    const posts = yield select(({ posts }) => posts)

    if (!posts.loading) return

    const response = yield call(postService.fetchPosts)

    yield put(postsFetchSucceeded({ ...response.data }))
  } catch (errors) {
    yield put(postsFetchFailed({ errors }))
  }
}

function* fetchPost({ payload }) {
  try {
    const post = yield select(({ post }) => post)

    if (post.allIds && parseInt(post.allIds) === parseInt(payload.id)) return

    const response = yield call(postService.fetchPost, { payload })

    yield put(postFetchSucceeded({ ...response.data }))
  } catch (errors) {
    yield put(postFetchFailed({ errors }))
  }
}

function* createPost({ payload }) {
  try {
    const response = yield call(postService.createPost, { payload })

    yield put(postCreateSucceeded({ ...response.data }))

    yield call(payload.reset)
  } catch (errors) {
    yield put(postCreateFailed({ errors }))
  }
}

function* updatePost({ payload }) {
  try {
    const response = yield call(postService.updatePost, { payload })

    yield put(postUpdateSucceeded({ ...response.data }))

    yield call(payload.hideUpdateBlock)
  } catch (errors) {
    yield put(postUpdateFailed({ errors }))
  }
}

function* deletePost({ payload }) {
  try {
    const response = yield call(postService.deletePost, { payload })

    yield put(postDeleteSucceeded({ ...response.data }))
  } catch (errors) {
    yield put(postDeleteFailed({ errors }))
  }
}

export default function* watcher() {
  const actions = {
    [postsFetchRequested().type]: fetchPosts,
    [postFetchRequested().type]: fetchPost,
    [postCreateRequested().type]: createPost,
    [postUpdateRequested().type]: updatePost,
    [postDeleteRequested().type]: deletePost
  }

  while (true) {
    const { type, payload } = yield take([
      postsFetchRequested().type,
      postFetchRequested().type,
      postCreateRequested().type,
      postUpdateRequested().type,
      postDeleteRequested().type
    ])

    yield fork(actions[type], { payload })
  }
}
