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
  fetchPosts: (data: any) => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, [Entity])

    return { byId, allIds }
  },

  fetchPost: (data: any) => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, Entity)

    return { byId, allIds }
  },

  createPost: (data: any) => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, Entity)

    return { byId, allIds }
  },

  updatePost: (data: any) => {
    const {
      entities: { posts: byId },
      result: allIds
    } = normalize(data, Entity)

    return { byId, allIds }
  },

  deletePost: ({ id }: any) => ({ id })
}
