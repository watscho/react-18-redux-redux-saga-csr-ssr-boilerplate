import i18next from 'i18next'
import 'isomorphic-unfetch'

export const ifetch = (url: any, { options = {}, accessToken = '' }: any = {}) =>
  fetch(url, {
    method: 'GET',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': i18next.language,
      Authorization: `Bearer ${accessToken}`,
      ...options.headers
    }
  })
