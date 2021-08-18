import { basename } from 'path'
import SVG from 'react-inlinesvg'
import camelCase from 'camelcase'

export const ctxToObject = context => {
  const keys = context.keys()
  const obj = {}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const name = basename(key).split('.')[0]
    const defaultExport = context(key).default
    if (!defaultExport) continue
    const modules = name !== 'index' ? { [name]: defaultExport } : defaultExport
    Object.assign(obj, modules)
  }
  return obj
}

export const ctxToArray = context => {
  const keys = context.keys()
  let arr = []
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const defaultExport = context(key).default
    let elements = defaultExport
    if (!Array.isArray(defaultExport)) {
      elements = [defaultExport]
    }
    arr = [...arr, ...elements]
  }
  return arr
}

export const ctxToSvg = context => {
  const keys = context.keys()
  const obj = {}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const name = camelCase(basename(key).split('.')[0], {
      pascalCase: true
    })
    obj[name] = ({ ...rest }) => <SVG {...rest} src={context(key)} />
  }
  return obj
}
