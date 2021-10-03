import { shallowEqual, useSelector } from 'react-redux'

import { default as scss } from 'scss/modules/posts.scss'

export const PostView = () => {
  const {
    post: { byId, allIds, errors, loading }
  } = useSelector(({ post }: any) => ({ post }), shallowEqual)

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
