import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { setVisibility } from '@/modules/application/actions'
import { postUpdateRequested } from '../actions'

import { default as scss } from 'scss/modules/posts.scss'

export const PostUpdateBlock = ({ id, title, body, loading, blockName }: any) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const hideUpdateBlock = () => dispatch(setVisibility({ name: blockName }))

  const onSubmit = ({ title, body }: any) =>
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
