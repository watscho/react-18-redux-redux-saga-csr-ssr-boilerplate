import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import ru from './locales/ru.json'
import ka from './locales/ka.json'

export const resources = {
  en,
  ru,
  ka
} as const;

const locales = {
  en: 'English',
  ru: 'Русский',
  ka: 'ქართული'
}
const locs = Object.keys(locales)

const options: any = {
  fallbackLng: locs[0],
  whitelist: locs,
  load: 'languageOnly',
  detection: {
    order: ['cookie'],
    caches: ['cookie'],
    lookupCookie: 'locale',
    excludeCacheFor: ['cimode'],
    checkWhitelist: true
  },
  interpolation: {
    escapeValue: false
  },
  resources
}

const release = typeof process !== 'undefined' ? process.release : false

if (!release) {
  i18n.use(initReactI18next).use(LanguageDetector)
}

if (!i18n.isInitialized) {
  i18n.init(options)
}

export const initLocales = () => console.log('locales init')

export { i18n }
