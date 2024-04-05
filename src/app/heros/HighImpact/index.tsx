'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '../../../payload-types'

import { CMSLink } from '../../components/Link'

import { SparklesCore } from '@/components/ui/sparkles'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  const words = [
    {
      text: 'I',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold z-20',
    },
    {
      text: 'create',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold z-20',
    },
    {
      text: 'digital',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold z-20',
    },
    {
      text: 'experiences',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold text-purple-500 z-20',
    },
    {
      text: 'that',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold z-20',
    },
    {
      text: 'inspire',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 z-20',
    },
  ]

  return (
    <div className="h-screen w-full -mt-[10.4rem] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.5}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="text-center relative z-20 flex flex-col items-center justify-center">
        <p className="mb-6 text-lg md:text-xl lg:text-2xl text-muted-foreground">
          Hello, my name is{' '}
          <span className="font-bold text-secondary-foreground">Mohamed Izhar</span>
        </p>
        <div className="max-w-6xl mb-16">
          <TypewriterEffect words={words} />
        </div>

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-4">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
