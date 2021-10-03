import { basename, dirname } from 'path'
import SVG from 'react-inlinesvg'
import camelCase from 'camelcase'

export const ctxToObject = (context: any) => {
  const keys = context.keys()

  const obj: any = {}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const name = basename(key).split('.')[0]
    const defaultExport = context(key).default
    if (!defaultExport) continue
    let module = defaultExport
    if (name !== 'index') {
      module = { [name]: defaultExport }
    }
    if (typeof module === 'function') {
      const name = dirname(key).split('/')[1]
      module = { [name]: defaultExport }
    }
    Object.assign(obj, module)
  }
  return obj
}

export const ctxToArray = (context: any) => {
  const keys = context.keys()
  let arr: any = []
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

export const ctxToSvg = (context: any) => {
  const keys = context.keys()
  const obj: any = {}
  for (let i = 0; i < keys.length; i++) {
    const key: any = keys[i]
    const name = camelCase(basename(key).split('.')[0], {
      pascalCase: true
    })
    obj[name] = ({ ...rest }) => <SVG {...rest} src={context(key)} />
  }
  return obj
}