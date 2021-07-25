import PropTypes from 'prop-types'

export const ArticleItem = ({ title, description }) => (
  <article>
    <h2>{title}</h2>
    <p>{description}</p>
  </article>
)

ArticleItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}
