import { ctxToSvg } from '@/helpers/context'

export const icons = ctxToSvg(
  require.context('imgs?raw', true, /^\.\/.*\.svg$/)
)
