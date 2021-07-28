import fetch from 'node-fetch'

import { postTransformer } from 'transformers'

export const postService = {
  fetchPosts: async () => {
    const url = process.env.API_FETCH_POSTS

    const response = await fetch(url)

    const data = await response.json()

    return {
      data: response.ok ? postTransformer.fetchPosts(data) : data,
      ok: response.ok,
      status: response.status
    }
  },

  deletePost: async ({ payload }) => {
    const url = process.env.API_DELETE_POST.replace(':id', payload.id)

    const response = await fetch(url, { method: 'DELETE' })

    const data = await response.json()

    return {
      data,
      ok: response.ok,
      status: response.status
    }
  }
}
