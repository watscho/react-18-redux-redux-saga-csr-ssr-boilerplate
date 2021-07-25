import { ifetch } from 'tools'
import { authTransformer } from 'transformers'

export const authService = {
  fetchUser: async ({ cookies }) => {
    const { accessToken } = cookies

    if (!accessToken)
      return {
        data: undefined,
        ok: true,
        status: 200
      }

    const url = process.env.API_AUTH_USER

    const response = await ifetch(url, { accessToken })

    const data = await response.json()

    return {
      data: response.ok ? authTransformer.fetchUser(data) : data,
      ok: response.ok,
      status: response.status
    }
  },

  signIn: async ({ payload }) => {
    const url = process.env.API_SIGN_IN

    const response = await ifetch(url, {
      options: {
        method: 'POST',
        body: JSON.stringify(payload.data)
      }
    })

    const data = await response.json()

    return {
      data,
      ok: response.ok,
      status: response.status
    }
  },

  signUp: async ({ payload }) => {
    const url = process.env.API_SIGN_UP

    const response = await ifetch(url, {
      options: {
        method: 'POST',
        body: JSON.stringify(authTransformer.signUpRequest(payload))
      }
    })

    const data = await response.json()

    return {
      data,
      ok: response.ok,
      status: response.status
    }
  },

  logoutAuth: async ({ cookies }) => {
    return {
      data: cookies,
      ok: true,
      status: 200
    }
  }
}
