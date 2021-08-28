import { shallowEqual, useSelector } from 'react-redux'

import scss from 'scss/modules/posts'

export const PostView = () => {
  const {
    post: { byId, allIds, errors, loading }
  } = useSelector(({ post }) => ({ post }), shallowEqual)

  if (loading || errors) {
    return <p className={scss.loading}>Loading...</p>
  }

  const post = byId[allIds]

  return (
    <div className={scss.postView}>
      <p className={scss.title}>{post.title}</p>
      <p className={scss.desc}>{post.body}</p>
    </div>
  )
}
