import { ctxToArray } from 'helpers/context'

export default ctxToArray(require.context('./', true, /\.\/\w+(?<!index)\.js$/))
