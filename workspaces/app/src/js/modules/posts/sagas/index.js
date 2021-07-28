import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  postsFetchSucceeded,
  postsFetchFailed,
  postsFetchRequested,
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
    [postDeleteRequested().type]: deletePost
  }

  while (true) {
    const { type, payload } = yield take([
      postsFetchRequested().type,
      postDeleteRequested().type
    ])

    yield fork(actions[type], { payload })
  }
}
