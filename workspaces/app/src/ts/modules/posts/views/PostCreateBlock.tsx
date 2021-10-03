import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { postCreateRequested } from '../actions'

import { PostCreateBtn } from './PostCreateBtn'

import { default as scss } from 'scss/modules/posts.scss'

export const PostCreateBlock = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = ({ title, body }: any) =>
    dispatch(postCreateRequested({ data: { title, body }, reset }))

  return (
    <div className={scss.createPost}>
      <p className={scss.title}>Create post</p>
      <div className={scss.formContainer}>
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <label htmlFor="title">
            <span>Title</span>
            <input
              id="title"
              className={errors.title ? scss.error : ''}
              {...register('title', { required: true })}
            />
          </label>
          <label htmlFor="body">
            <span>Description</span>
            <textarea
              id="body"
              className={errors.body ? scss.error : ''}
              {...register('body', { required: true })}
            />
          </label>
          <PostCreateBtn />
        </form>
      </div>
    </div>
  )
}
