import PropTypes from 'prop-types'

export const PostViewBlock = ({ title, body }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
  </>
)

PostViewBlock.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
