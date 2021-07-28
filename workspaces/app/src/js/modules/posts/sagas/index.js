import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  postsFetchSucceeded,
  postsFetchFailed,
  postsFetchRequested
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

export default function* watcher() {
  while (true) {
    yield take(postsFetchRequested().type)

    yield fork(fetchPosts)
  }
}
