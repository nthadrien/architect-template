import { ui, routes } from './ui';

export const languages = {
  en: 'English',
  fr: 'Français',
};

export const available_languages = [...Object.keys(languages)] as const;

export type supported_languages =  typeof available_languages[number]

export const defaultLang = 'en';
export const showDefaultLang = true;

export function getLocaleFromUrl(url: URL) {
  const lang = url.pathname.split('/')[1];
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  }
}


// export function getRouteFromUrl(url: URL) :string | undefined {
//   const pathname = new URL(url).pathname;
//   const path = pathname?.split('/')[1];
//   if( !path ) return undefined;
//   const currentLocale = getLocaleFromUrl(url);

//   // if (defaultLang == currentLocale) return routes[currentLocale][]
  
// }

// export function useTranslatedPath(lang: keyof typeof ui) {
//   return function translatePath(path: string, l: string = lang) {
//     const pathName = path.replaceAll('/', '')
//     const hasTranslation = defaultLang !== l && routes[l] !== undefined && routes[l][pathName] !== undefined
//     const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path

//     return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
//   }
// }