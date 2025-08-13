"use client"

import React from "react"
import { useRouter, useParams } from "next/navigation"
import { getSupportedLocales, type SupportedLocale } from "@/lib/translations"

const localeNames: Record<SupportedLocale, string> = {
  en: "English",
  no: "Norsk",
}

const countryCodeMap: Record<SupportedLocale, string> = {
  en: "us",
  no: "no",
}

export default function LanguageSwitcher() {
  const router = useRouter()
  const params = useParams()
  const currentCountryCode = params?.countryCode as string
  
  const handleLanguageChange = (locale: SupportedLocale) => {
    const newCountryCode = countryCodeMap[locale]
    const currentPath = window.location.pathname
    
    // Replace the country code in the current path
    const newPath = currentPath.replace(`/${currentCountryCode}`, `/${newCountryCode}`)
    router.push(newPath)
  }

  const getCurrentLocale = (): SupportedLocale => {
    const localeMap: Record<string, SupportedLocale> = {
      'no': 'no',
      'us': 'en',
      'gb': 'en',
      'ca': 'en',
    }
    return localeMap[currentCountryCode] || 'en'
  }

  const currentLocale = getCurrentLocale()

  return (
    <div className="relative inline-block text-left">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value as SupportedLocale)}
        className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {getSupportedLocales().map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </div>
  )
}
