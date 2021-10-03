import path from 'path'
import { readFile } from 'fs'

import { layout } from './layout'

export const readEntry = (res: any, { helmet, reduxStore, html }: any) => {
  const entry = path.resolve(__dirname, 'index')

  return readFile(entry, 'utf8', (err, data) => {
    try {
      if (err) res.status(500).send(err)

      res.status(200).send(
        layout({
          data,
          helmet,
          reduxStore,
          html
        })
      )
    } catch (error: any) {
      res.status(500).send(error.message)
    }
  })
}
