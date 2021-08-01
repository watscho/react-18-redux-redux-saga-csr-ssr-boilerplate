import i18next from 'i18next'
import fetch from 'node-fetch'

export const ifetch = (url, { options = {}, accessToken = '' } = {}) =>
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
