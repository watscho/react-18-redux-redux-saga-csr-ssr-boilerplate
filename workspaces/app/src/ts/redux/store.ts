import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import { cReducers } from './reducers'

export const configureStore = (initState: any) => {
  const sagaMiddleware = createSagaMiddleware()

  const store: any  = createStore(
    cReducers,
    initState,
    applyMiddleware(sagaMiddleware)
  )

  store.runSaga = sagaMiddleware.run

  store.close = () => store.dispatch(END)
  
  return { store }
}
