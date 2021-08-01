import { shallowEqual, useSelector } from 'react-redux'
import scss from 'scss/modules/posts'

export const PostView = () => {
  const post = useSelector(({ post }) => post, shallowEqual)

  return (
    <div className={scss.postView}>
      {(post.loading || post.errors) && '...'}
      {!post.loading && !post.errors && (
        <>
          <p className={scss.title}>{post.data.title}</p>
          <p className={scss.desc}>{post.data.body}</p>
        </>
      )}
    </div>
  )
}
