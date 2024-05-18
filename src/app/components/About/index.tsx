'use client'
import React from 'react'
import Link from 'next/link'
import { Skills } from './Skills'
import { TextRevealEffect } from '../ui/TextRevealEffect'
import { FlipWords } from '../ui/FlipWords'
import { GradientButton } from '../ui/GradientButton'

import { SiFreelancer } from 'react-icons/si'
import { FaSquareUpwork } from 'react-icons/fa6'
import { TbBrandFiverr } from 'react-icons/tb'

import { IoLogoGithub } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

export const About = () => {
  return (
    <section
      id="about"
      className="container pt-24 pb-24 text-foreground dark:text-muted-foreground"
    >
      <div className="flex gap-4 flex-col xl:flex-row w-full">
        <div className="w-full xl:w-3/5 min-h-[24rem] lg:min-h-[32rem] rounded-xl p-4 lg:p-8 border flex items-center justify-center">
          <div className="w-full text-center">
            <h3 className="font-bold text-3xl lg:text-4xl tracking-tight">
              <FlipWords words={['Developer', 'Designer', 'Engineer', 'Enthusiast']} />
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal mt-8 text-left">
              I am a full-stack developer with a passion for creating beautiful and functional
              applications. I am a self-taught developer with a knack for learning new technologies
              and creating innovative solutions to complex problems.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-2/5 flex flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-col gap-4">
          <div className="w-full min-h-[12rem] lg:grow rounded-xl p-4 md:p-8 border flex items-center justify-between group/hire">
            <h3 className="font-bold text-3xl lg:text-4xl tracking-tight group-hover/hire:translate-x-2 duration-300">
              Hire me on
            </h3>
            <div className="flex flex-col gap-4">
              <Link href="#" className="group-hover/hire:rotate-12 duration-300">
                <GradientButton>
                  <div className="w-32 flex gap-4 justify-center items-center">
                    <span>Freelancer</span>
                    <SiFreelancer className="h-6 w-6" />
                  </div>
                </GradientButton>
              </Link>
              <Link href="#" className="group-hover/hire:-rotate-12 duration-300">
                <GradientButton>
                  <div className="w-32 flex gap-4 justify-center items-center">
                    <span>Fiverr</span>
                    <TbBrandFiverr className="h-6 w-6" />
                  </div>
                </GradientButton>
              </Link>
              <Link href="#" className="group-hover/hire:rotate-12 duration-300">
                <GradientButton>
                  <div className="w-32 flex gap-4 justify-center items-center">
                    <span>Upwork</span>
                    <FaSquareUpwork className="h-6 w-6" />
                  </div>
                </GradientButton>
              </Link>
            </div>
          </div>
          <div className="w-full min-h-[12rem] rounded-xl p-4 lg:p-8 border flex gap-8 items-center justify-center group/social">
            <Link href="#" className="h-10 w-10 md:w-12 md:h-12">
              <IoLogoGithub className="h-10 w-10 md:w-12 md:h-12 text-muted-foreground group-hover/social:rotate-12 hover:scale-125 group-hover/social:text-foreground duration-300" />
            </Link>
            <Link href="#" className="h-10 w-10 md:w-12 md:h-12">
              <FaLinkedin className="h-10 w-10 md:w-12 md:h-12 text-muted-foreground group-hover/social:-rotate-12 hover:scale-125 group-hover/social:text-blue-500 duration-300" />
            </Link>

            <Link href="#" className="h-10 w-10 md:w-12 md:h-12">
              <FaXTwitter className="h-10 w-10 md:w-12 md:h-12 text-muted-foreground group-hover/social:rotate-12 hover:scale-125 group-hover/social:text-foreground duration-300" />
            </Link>
            <Link href="#" className="h-10 w-10 md:w-12 md:h-12">
              <FaInstagram className="h-10 w-10 md:w-12 md:h-12 text-muted-foreground group-hover/social:-rotate-12 hover:scale-125 group-hover/social:text-rose-500 duration-300" />
            </Link>
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

          <div className="w-full min-h-[12rem] lg:grow rounded-xl p-4 lg:p-8 border">
            <h3>Copy my email</h3>
            <p>Let&apos;s create something beautiful</p>
          </div>
        </div>
        <div
          className="w-full xl:w-3/5 min-h-[24rem] lg:min-h-[32rem] rounded-xl p-4 lg:p-8 border flex flex-col justify-between group/tech"
          aria-label="tech stack"
        >
          <div className="w-full flex items-center text-center">
            <h3 className="w-full font-bold text-3xl lg:text-4xl tracking-tight group-hover/tech:translate-x-2 duration-300">
              My tech stack
            </h3>
          </div>
          <div id="skills" className="pt-4 lg:pt-8 pb-2 pr-2">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
