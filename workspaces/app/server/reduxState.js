export const reduxState = ({ store }) => {
  const reduxStore = `window.__REDUX_STATE__ = ${JSON.stringify(
    store.getState()
  )};`

  return { reduxStore }
}
