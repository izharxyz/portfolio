'use client'
import React from 'react'

import type { Page } from '../../../payload-types'

import { CMSLink } from '../../components/Link'

import { SparklesCore } from '@/components/ui/sparkles'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

export const HighImpactHero: React.FC<Page['hero']> = ({ links }) => {
  const greeting = `Hello, my name is Mohamed Izhar`
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
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold text-purple-600 z-20',
    },
    {
      text: 'experiences',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold text-purple-600 z-20',
    },
    {
      text: 'that',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold z-20',
    },
    {
      text: 'inspire',
      className: 'text-5xl md:text-6xl lg:text-7xl font-bold z-20',
    },
  ]

  return (
    <div className="h-screen w-full -mt-[10.4rem] px-4 relative flex flex-col items-center justify-center overflow-hidden text-pur">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.8}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#9333ea"
        />
      </div>
      <div className="text-center relative z-20 flex flex-col items-center justify-center">
        <TextGenerateEffect
          words={greeting}
          className="mb-6 text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal"
        />

        <div className="max-w-6xl mb-16">
          <TypewriterEffect words={words} />
        </div>

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-col md:flex-row gap-4 relative">
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
