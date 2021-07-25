import { ctxImportToSvg } from 'helpers/context'

export const icons = ctxImportToSvg(
  require.context('!!svg-inline-loader!imgs', true, /^\.\/.*\.svg$/)
)
