import { basename, dirname } from 'path'
import SVG from 'react-inlinesvg'
import camelCase from 'camelcase'

export const ctxImportToObject = (contexts, { mergeValues = false } = {}) => {
  let cache = {},
    ctxs = contexts
  if (!Array.isArray(ctxs)) ctxs = [contexts]
  for (let i = 0; i < ctxs.length; i++) {
    ctx(ctxs[i])
  }
  function ctx(context) {
    const keys = context.keys()
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i],
        withBasename = basename(key).split('.')[0],
        withDirname = dirname(key).split('/')[1]

      let withName = withDirname
      if (withBasename !== 'index') {
        withName = withBasename
      }

      const defaultExport = context(key).default

      if (defaultExport) cache[withName] = defaultExport
    }
  }
  if (!mergeValues) return cache
  let mergeCache = {}
  for (let key in cache) {
    const value = cache[key]
    let obj = value
    if (typeof value === 'function') {
      obj = { [key]: cache[key] }
    }
    Object.assign(mergeCache, obj)
  }
  return mergeCache
}

export const ctxImportToArray = (context, { mergeValues = false } = {}) => {
  let cache = []
  const keys = context.keys()
  for (let i = 0; i < keys.length; i++) {
    cache.push(context(keys[i]).default)
  }
  if (!mergeValues) return cache
  let mergeCache = []
  for (let j = 0; j < cache.length; j++) {
    const value = cache[j]
    let arr = value
    if (typeof value !== 'object') arr = [value]
    mergeCache.push(...arr)
  }
  return mergeCache
}

export const ctxImportToSvg = context => {
  let cache = {}
  const keys = context.keys()
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i],
      withBasename = camelCase(basename(key).split('.')[0], {
        pascalCase: true
      })
    cache[withBasename] = ({ ...rest }) => <SVG {...rest} src={context(key)} />
  }
  return cache
}
