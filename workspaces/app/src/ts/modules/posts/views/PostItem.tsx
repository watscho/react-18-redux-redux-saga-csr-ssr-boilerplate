import { Link } from 'react-router-dom'

import { IsDisplayed } from '@/components'
import { PostUpdateBlockBtn } from './PostUpdateBlockBtn'
import { PostDeleteBtn } from './PostDeleteBtn'
import { PostViewBlock } from './PostViewBlock'
import { PostUpdateBlock } from './PostUpdateBlock'

import { default as scss } from 'scss/modules/posts.scss'

export const PostItem = ({ id, title, body, ...rest }: any) => {
  const blockName = `post-view-update-${id}`

  return (
    <article>
      <div className={scss.top}>
        <i>ID: {id}</i>
        <div className={scss.actions}>
          <Link to={`/posts/${id}/view`}>view</Link>
          <IsDisplayed name={blockName}>
            <PostUpdateBlockBtn blockName={blockName} />
          </IsDisplayed>
          <PostDeleteBtn id={id} {...rest} />
        </div>
      </div>
      <IsDisplayed name={blockName}>
        {({ visibility }: any) =>
          visibility ? (
            <PostViewBlock title={title} body={body} />
          ) : (
            <PostUpdateBlock
              id={id}
              title={title}
              body={body}
              {...rest}
              blockName={blockName}
            />
          )
        }
      </IsDisplayed>
    </article>
  )
}
