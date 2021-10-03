import { PostItem } from './PostItem'

import { usePostsService } from '@/hooks/services'

import { default as scss } from 'scss/modules/posts.scss'

export const PostList = () => {
  const {
    posts: { byId, allIds, errors, loading }
  } = usePostsService()

  if (loading || errors) {
    return <p className={scss.loading}>Loading...</p>
  }

  return (
    <div className={scss.list}>
      {allIds.map((id: any) => (
        <PostItem key={id} id={id} {...byId[id]} />
      ))}
      {!allIds.length && <p className={scss.noRecord}>No records</p>}
    </div>
  )
}
