import { ctxToObject, ctxToArray } from '@/helpers/context'

export const modules = ctxToObject(
  require.context('./', true, /\.\/\w+\/index\.ts$/)
)

export const routes = ctxToArray(
  require.context('./', true, /\.\/\w+\/routes\.tsx$/)
)

export const reducers = ctxToObject(
  require.context('./', true, /\.\/\w+\/reducers\/index\.ts$/)
)

export const sagas = ctxToArray(
  require.context('./', true, /\.\/\w+\/sagas\/index\.ts$/)
)
