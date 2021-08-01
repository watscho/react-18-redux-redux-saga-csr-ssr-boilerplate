import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { postDeleteRequested } from '../actions'

export const PostDeleteBtn = ({ id }) => {
  const dispatch = useDispatch()

  const listenDeleteBtn = () => dispatch(postDeleteRequested({ id }))

  return (
    <button type="button" onClick={listenDeleteBtn}>
      delete
    </button>
  )
}

PostDeleteBtn.propTypes = {
  id: PropTypes.number.isRequired
}
