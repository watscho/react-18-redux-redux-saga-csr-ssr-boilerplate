import { shallowEqual, useSelector } from 'react-redux'

export const PostCreateBtn = () => {
  const postCreate = useSelector(({ postCreate }) => postCreate, shallowEqual)

  return (
    <button type="submit" disabled={postCreate.loader}>
      {!postCreate.loader ? 'create' : '...'}
    </button>
  )
}
