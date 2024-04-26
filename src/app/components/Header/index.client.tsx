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
import { RxHamburgerMenu } from 'react-icons/rx'

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
    <header className="z-40 w-full h-fit fixed top-4" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="container px-4 md:px-8">
        <div className="hidden md:grid grid-cols-3 p-1 border rounded-full bg-white dark:bg-black bg-opacity-70 backdrop-blur-lg">
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
              <GradientButton>Get in touch</GradientButton>
            </Link>
          </div>
        </div>

        {/* mobile nav */}
        <div className="md:hidden flex items-center justify-between border rounded-full bg-white dark:bg-black bg-opacity-70 backdrop-blur-lg">
          <Link href="/" className="pl-2">
            <Logo />
          </Link>
          <div className="flex gap-5 pr-4 items-center">
            <ThemeSelector />
            <RxHamburgerMenu size={20} />
          </div>
        </div>
      </div>
    </header>
  )
}
