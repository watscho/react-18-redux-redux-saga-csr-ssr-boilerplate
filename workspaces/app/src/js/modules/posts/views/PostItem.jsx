import PropTypes from 'prop-types'

import { IsDisplayed } from 'components'
import { PostUpdateBtn } from './PostUpdateBtn'
import { PostDeleteBtn } from './PostDeleteBtn'
import { PostViewBlock } from './PostViewBlock'
import { PostUpdateBlock } from './PostUpdateBlock'

import scss from 'scss/modules/posts'

export const PostItem = ({ id, title, body }) => {
  const blockName = `post-view-update-${id}`

  return (
    <article>
      <div className={scss.top}>
        <i>ID: {id}</i>
        <div className={scss.actions}>
          <IsDisplayed name={blockName}>
            <PostUpdateBtn blockName={blockName} />
          </IsDisplayed>
          <PostDeleteBtn id={id} />
        </div>
      </div>
      <IsDisplayed name={blockName}>
        {({ visibility }) =>
          visibility ? (
            <PostViewBlock title={title} body={body} />
          ) : (
            <PostUpdateBlock
              id={id}
              title={title}
              body={body}
              blockName={blockName}
            />
          )
        }
      </IsDisplayed>
    </article>
  )
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
