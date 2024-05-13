import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '../../../payload-types'

import { CMSLink } from '../Link'

import { Logo } from '../Logo/Logo'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer')()

  const navItems = footer?.navItems || []

  return (
    <footer className="border-t border-border bg-card text-muted-foreground">
      <div className="container py-8 gap-8 flex flex-col justify-center items-center md:flex-row md:justify-between">
        <Link className="flex items-center text-foreground" href="/">
          <Logo />
        </Link>

        <div className="flex items-center flex-row gap-4 md:items-center">
          <nav className="flex flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-muted-foreground" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
