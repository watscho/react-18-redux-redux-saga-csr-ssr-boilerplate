import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

import { setVisibility } from 'modules/application/actions'
import { postUpdateRequested } from '../actions'

import scss from 'scss/modules/posts'

export const PostUpdateBlock = ({ id, title, body, loading, blockName }) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const hideUpdateBlock = () => dispatch(setVisibility({ name: blockName }))

  const onSubmit = ({ title, body }) =>
    dispatch(
      postUpdateRequested({ id, data: { title, body }, hideUpdateBlock })
    )

  return (
    <div className={scss.formContainer}>
      <form method="POST" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label htmlFor="title">
          <span>Title</span>
          <input
            id="title"
            defaultValue={title}
            className={errors.title ? scss.error : ''}
            {...register('title', { required: true })}
          />
        </label>
        <label htmlFor="body">
          <span>Description</span>
          <textarea
            id="body"
            defaultValue={body}
            className={errors.body ? scss.error : ''}
            {...register('body', { required: true })}
          />
        </label>
        <button type="submit" disabled={loading}>
          {!loading ? 'save' : '...'}
        </button>
      </form>
    </div>
  )
}

PostUpdateBlock.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  blockName: PropTypes.string.isRequired
}
