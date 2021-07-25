import fetch from 'node-fetch'

import { articleTransformer } from 'transformers'

export const articleService = {
  fetchArticles: async () => {
    const url = process.env.API_FETCH_ARTICLES

    const response = await fetch(url)

    const data = await response.json()

    return {
      data: response.ok ? articleTransformer.fetchArticles(data) : data,
      ok: response.ok,
      status: response.status
    }
  }
}
