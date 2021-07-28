import PropTypes from 'prop-types'

import { PostDeleteBtn } from './PostDeleteBtn'

import scss from 'scss/modules/posts'

export const PostItem = ({ id, title, body }) => (
  <article>
    <div className={scss.top}>
      <i>ID: {id}</i>
      <PostDeleteBtn id={id} />
    </div>
    <h2>{title}</h2>
    <p>{body}</p>
  </article>
)

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
