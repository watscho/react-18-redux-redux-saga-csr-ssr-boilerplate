import PropTypes from 'prop-types'

export const PostItem = ({ id, title, body }) => (
  <article>
    <i>ID: {id}</i>
    <h2>{title}</h2>
    <p>{body}</p>
  </article>
)

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
