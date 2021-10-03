import { useDispatch } from 'react-redux'

import { postDeleteRequested } from '../actions'

export const PostDeleteBtn = ({ id, loading }: any) => {
  const dispatch = useDispatch()

  const listenDeleteBtn = () => dispatch(postDeleteRequested({ id }))

  return (
    <button type="button" onClick={listenDeleteBtn}>
      {!loading ? 'delete' : '...'}
    </button>
  )
}
