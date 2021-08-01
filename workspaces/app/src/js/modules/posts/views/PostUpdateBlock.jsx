import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

import { setVisibility } from 'modules/application/actions'
import { postUpdateRequested } from '../actions'

import scss from 'scss/modules/posts'

export const PostUpdateBlock = ({ id, title, body, blockName }) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = ({ title, body }) => {
    dispatch(postUpdateRequested({ id, data: { title, body } }))
    dispatch(setVisibility({ name: blockName }))
  }

  return (
    <div className={scss.formContainer}>
      <form method="POST" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <p>Title</p>
        <input
          defaultValue={title}
          className={errors.title ? scss.error : ''}
          {...register('title', { required: true })}
        />
        <p>Description</p>
        <textarea
          defaultValue={body}
          className={errors.body ? scss.error : ''}
          {...register('body', { required: true })}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

PostUpdateBlock.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  blockName: PropTypes.string.isRequired
}
