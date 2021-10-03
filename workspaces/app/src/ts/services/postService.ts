import fetch from 'isomorphic-unfetch'

import { postTransformer } from '@/transformers'

export const postService = {
  fetchPosts: async () => {
    const url: any = process.env.API_FETCH_POSTS

    const response = await fetch(url)

    const data = await response.json()

    return {
      data: response.ok ? postTransformer.fetchPosts(data) : data,
      ok: response.ok,
      status: response.status
    }
  },

  fetchPost: async ({ payload }: any) => {
    const url: any = (process.env.API_FETCH_POST as string).replace(':id', payload.id)

    const response = await fetch(url)

    const data = await response.json()

    return {
      data: response.ok ? postTransformer.fetchPost(data) : data,
      ok: response.ok,
      status: response.status
    }
  },

  createPost: async ({ payload }: any) => {
    const url: any = process.env.API_CREATE_POST

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title: payload.data.title,
        body: payload.data.body
      })
    })

    // Because server returns only id.
    // const data = await response.json()

    // Fake server response
    const data = {
      id: Math.floor(Math.random() * 32767),
      userId: 1,
      title: payload.data.title,
      body: payload.data.body
    }

    return {
      data: response.ok ? postTransformer.createPost(data) : data,
      ok: response.ok,
      status: response.status
    }
  },

  updatePost: async ({ payload }: any) => {
    const url: any = (process.env.API_UPDATE_POST as string ).replace(':id', payload.id)

    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        title: payload.title,
        body: payload.body
      })
    })

    // Because server returns only id.
    // const data = await response.json()

    // Fake server response
    const data = {
      id: payload.id,
      userId: 1,
      title: payload.data.title,
      body: payload.data.body
    }

    return {
      data: response.ok ? postTransformer.updatePost(data) : data,
      ok: response.ok,
      status: response.status
    }
  },

  deletePost: async ({ payload }: any) => {
    const url:any  = (process.env.API_DELETE_POST as string).replace(':id', payload.id)

    const response = await fetch(url, { method: 'DELETE' })

    // Because server returns empty {}.
    // const data = await response.json()

    // Fake server response
    const data = {
      id: payload.id
    }

    return {
      data: response.ok ? postTransformer.deletePost(data) : data,
      ok: response.ok,
      status: response.status
    }
  }
}
