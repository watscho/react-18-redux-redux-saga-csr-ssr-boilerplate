import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  articlesFetchSucceeded,
  articlesFetchFailed,
  articlesFetchRequested
} from '../actions'

import { articleService } from 'services'

function* fetchArticles() {
  try {
    const articles = yield select(({ articles }) => articles)

    if (!articles.loading) return

    const response = yield call(articleService.fetchArticles)

    yield put(articlesFetchSucceeded({ data: response.data }))
  } catch (errors) {
    yield put(articlesFetchFailed({ errors }))
  }
}

export default function* watcher() {
  while (true) {
    yield take(articlesFetchRequested().type)

    yield fork(fetchArticles)
  }
}
