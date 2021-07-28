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
  }
}
