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
          {data.map(({ id, title, body }) => (
            <PostItem key={id} id={id} title={title} body={body} />
          ))}
        </div>
      )}
    </>
  )
}
