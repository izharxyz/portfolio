'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '../../../payload-types'

import { Logo } from '../Logo/Logo'
import { HeaderNav } from './Nav'
import { GradientButton } from '../ui/gradient-button'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="z-40 w-screen h-fit fixed top-4 left-0 bg-white dark:bg-black bg-opacity-70 backdrop-blur-lg"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container py-1 px-1 grid grid-cols-3 border rounded-full">
        <div className="w-full flex pl-3 items-center justify-start">
          <HeaderNav header={header} />
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="w-full flex gap-5 justify-end items-center">
          <ThemeSelector />
          <Link href="/#contact">
            <GradientButton>Let's create something</GradientButton>
          </Link>
        </div>
      </div>
    </header>
  )
}
