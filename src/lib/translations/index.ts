import { en } from './en';
import { no } from './no';

export type { Translation } from './en';

export const translations = {
  en,
  no,
} as const;

export type SupportedLocale = keyof typeof translations;
export type AnyTranslation = typeof en | typeof no;

export function getTranslation(locale: string): AnyTranslation {
  const normalizedLocale = locale.toLowerCase().split('-')[0] as SupportedLocale;
  return translations[normalizedLocale] || en;
}

export function getSupportedLocales(): SupportedLocale[] {
  return Object.keys(translations) as SupportedLocale[];
}

export function isValidLocale(locale: string): locale is SupportedLocale {
  return locale in translations;
}
