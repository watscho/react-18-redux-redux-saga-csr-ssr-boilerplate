import { PostItem } from './PostItem'

import { usePostsService } from 'hooks/services'

import scss from 'scss/modules/posts'

export const PostList = () => {
  const {
    posts: { data, errors, loading }
  } = usePostsService()

  return (
    <>
      {(loading || errors) && <p className={scss.loading}>Loading...</p>}
      {!loading && (
        <div className={scss.list}>
          {/* key idx just for example */}
          {data.map(({ id, title, body }, idx) => (
            <PostItem key={idx} id={id} title={title} body={body} />
          ))}
          {!data.length && <p className={scss.noRecord}>No records</p>}
        </div>
      )}
    </>
  )
}
