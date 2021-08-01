import PropTypes from 'prop-types'
import { shallowEqual, useSelector } from 'react-redux'

export const IsDisplayed = ({ name, no, children }) => {
  const visibilityStorage = useSelector(
    ({ visibilityStorage }) => visibilityStorage,
    shallowEqual
  )

  const visibility = no
    ? visibilityStorage[name]?.visible ?? !no
    : !visibilityStorage[name]?.visible

  return typeof children === 'function'
    ? children({ visibility })
    : visibility && children
}

IsDisplayed.propTypes = {
  name: PropTypes.string.isRequired,
  no: PropTypes.bool,
  children: PropTypes.any
}
