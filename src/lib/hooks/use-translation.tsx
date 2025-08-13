"use client";

import { useParams } from "next/navigation";
import { getTranslation, type Translation } from "@/lib/translations";

export function useTranslation(): Translation {
  const params = useParams();
  const countryCode = params?.countryCode as string;
  
  // Map country codes to locales
  const localeMap: Record<string, string> = {
    'no': 'no',
    'us': 'en',
    'gb': 'en',
    'ca': 'en',
  };
  
  const locale = localeMap[countryCode] || 'en';
  return getTranslation(locale);
}

export function useLocale(): string {
  const params = useParams();
  const countryCode = params?.countryCode as string;
  
  const localeMap: Record<string, string> = {
    'no': 'no',
    'us': 'en',
    'gb': 'en',
    'ca': 'en',
  };
  
  return localeMap[countryCode] || 'en';
}
