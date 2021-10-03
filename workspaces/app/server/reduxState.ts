export const reduxState = ({ store }: any) => {
  const reduxStore = `window.__REDUX_STATE__ = ${JSON.stringify(
    store.getState()
  )};`

  return { reduxStore }
}
