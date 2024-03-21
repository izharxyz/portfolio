import React from 'react'
import Link from 'next/link'
import { Logo } from '../../Logo'

export const NavbarLogo = () => {
  return (
    <div className="nav-logo-container">
      <Link href="/admin" className="logo-link">
        <Logo />
      </Link>
    </div>
  )
}
