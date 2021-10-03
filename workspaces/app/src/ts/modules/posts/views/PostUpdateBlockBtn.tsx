import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { setVisibility } from '@/modules/application/actions'

export const PostUpdateBlockBtn = ({ blockName }: any) => {
  const dispatch = useDispatch()

  const listenToggleUpdateBtn = () =>
    dispatch(setVisibility({ name: blockName }))

  return (
    <button type="button" onClick={listenToggleUpdateBtn}>
      update
    </button>
  )
}

PostUpdateBlockBtn.propTypes = {
  blockName: PropTypes.string.isRequired
}
