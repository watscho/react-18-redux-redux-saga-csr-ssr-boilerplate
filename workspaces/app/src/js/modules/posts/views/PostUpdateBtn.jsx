import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { setVisibility } from 'modules/application/actions'

export const PostUpdateBtn = ({ blockName }) => {
  const dispatch = useDispatch()

  const listenToggleUpdateBtn = () =>
    dispatch(setVisibility({ name: blockName }))

  return (
    <button type="button" onClick={listenToggleUpdateBtn}>
      update
    </button>
  )
}

PostUpdateBtn.propTypes = {
  blockName: PropTypes.string.isRequired
}
