'use client'
import React from 'react'
import Link from 'next/link'
import { Skills } from './Skills'
import { TextRevealEffect } from '../ui/textRevealEffect'

import { IconType } from 'react-icons/lib'
import { IoLogoGithub } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

export const About = () => {
  return (
    <section id="about" className="container pt-24 pb-24">
      <div className="flex gap-4 flex-col xl:flex-row w-full">
        <div className="w-full xl:w-3/5 min-h-[24rem] lg:min-h-[32rem] rounded-xl p-4 border">
          <h3>The Beginning</h3>
        </div>
        <div className="w-full xl:w-2/5 flex flex-col lg:flex-row xl:flex-col gap-4">
          <div className="w-full min-h-[12rem] lg:grow rounded-xl p-4 border relative">
            <h3>hire me on</h3>
          </div>
          <div className="w-full min-h-[12rem] rounded-xl p-4 border flex gap-8 items-center justify-center group/social">
            <SocialIcon href="#" color="foreground" rotate="rotate-12" Icon={IoLogoGithub} />
            <SocialIcon href="#" color="blue-500" rotate="-rotate-12" Icon={FaLinkedin} />
            <SocialIcon href="#" color="foreground" rotate="rotate-12" Icon={FaXTwitter} />
            <SocialIcon href="#" color="rose-500" rotate="-rotate-12" Icon={FaInstagram} />
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row w-full mt-4">
        <div className="w-full xl:w-2/5 flex flex-col gap-4">
          <div className="w-full min-h-[12rem] rounded-xl border flex items-center justify-center overflow-hidden">
            <TextRevealEffect
              text="An enthusiast with a passion for technology"
              revealText="A gamer with knack for side quests"
            />
          </div>

          <div className="w-full min-h-[12rem] lg:grow rounded-xl p-4 border">
            <h3>Copy my email</h3>
            <p>Let&apos;s create something beautiful</p>
          </div>
        </div>
        <div
          className="w-full xl:w-3/5 min-h-[24rem] lg:min-h-[32rem] rounded-xl p-4 lg:p-10 border flex flex-col justify-between"
          aria-label="tech stack"
        >
          <div className="w-full flex items-center text-center">
            <h3 className="w-full font-bold text-3xl lg:text-4xl tracking-tight">My tech stack</h3>
          </div>
          <div id="skills" className="pt-4 lg:pt-8 pb-2 pr-2">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialIcon = ({
  href,
  color,
  rotate,
  Icon,
}: {
  href: string
  color: string
  rotate: string
  Icon: IconType
}) => {
  return (
    <Link href={href} className="h-10 w-10 md:w-12 md:h-12">
      <Icon
        className={`h-10 w-10 md:w-12 md:h-12 text-muted-foreground group-hover/social:${rotate} hover:scale-125 group-hover/social:text-${color} duration-300`}
      />
    </Link>
  )
}
