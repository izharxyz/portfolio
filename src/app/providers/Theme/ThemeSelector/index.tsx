'use client'

import React, { useState, useEffect } from 'react'
import type { Theme } from './types'
import { useTheme } from '..'
import { themeLocalStorageKey } from './types'
import { FaSun, FaMoon } from 'react-icons/fa'

export const ThemeSelector: React.FC = () => {
  const { setTheme, theme } = useTheme()
  const [value, setValue] = useState('')

  const onThemeChange = (themeToSet: Theme | 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  return (
    <button
      onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
      className="relative flex items-center justify-center w-7 h-7 rounded-full cursor-pointer"
    >
      <div
        className={`absolute transition-transform duration-500 ${
          theme === 'dark' ? 'animate-rotate-to-dark' : 'animate-rotate-to-light'
        }`}
      >
        {theme === 'dark' ? (
          <FaMoon className="text-gray-200" size={20} />
        ) : (
          <FaSun className="text-gray-500" size={20} />
        )}
      </div>
    </button>
  )
}
