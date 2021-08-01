import { appDataTransformer } from 'transformers'
import { ifetch } from 'tools'

export const appDataService = {
  fetchAppData: async () => {
    const url = process.env.API_FETCH_APP_DATA

    const response = await ifetch(url)

    const data = await response.json()

    return {
      data: response.ok ? appDataTransformer.fetchAppData(data) : data,
      ok: response.ok,
      status: response.status
    }
  }
}
