export const postTransformer = {
  fetchPosts: data =>
    data.map(({ id, userId, title, body }) => ({
      id,
      userId,
      title,
      body
    })),

  fetchPost: ({ id, userId, title, body }) => ({ id, userId, title, body }),

  createPost: ({ id }) => ({ id })
}
