import { normalize, schema } from 'normalizr'

const Entity = new schema.Entity('posts', undefined, {
  processStrategy: ({ id, userId, title, body }) => ({
    id,
    userId,
    title,
    body
  })
})

export const postTransformer = {
  fetchPosts: data => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, [Entity])

    return { byId, allIds }
  },

  fetchPost: data => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, Entity)

    return { byId, allIds }
  },

  createPost: data => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, Entity)

    return { byId, allIds }
  },

  updatePost: data => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, Entity)

    return { byId, allIds }
  },

  deletePost: ({ id }) => ({ id })
}
