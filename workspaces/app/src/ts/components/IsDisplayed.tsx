import { shallowEqual, useSelector } from 'react-redux'

export const IsDisplayed = ({ name, no, children }: any) => {
  const visibilityStorage = useSelector(
    ({ visibilityStorage }: any) => visibilityStorage,
    shallowEqual
  )

  const visibility = no
    ? visibilityStorage[name]?.visible ?? !no
    : !visibilityStorage[name]?.visible

  return typeof children === 'function'
    ? children({ visibility })
    : visibility && children
}