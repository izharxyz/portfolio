'use client'
import React from 'react'
import { Skills } from '../Skills'

export const About = () => {
  return (
    <section id="about" className="container pt-24 pb-24">
      <div className="flex gap-4 flex-col xl:flex-row w-full">
        <div className="w-full xl:w-3/5 min-h-[24rem] lg:min-h-[32rem] rounded-xl p-4 border">
          <h3>The Beginning</h3>
          <p>The story of the beginning of the company</p>
        </div>
        <div className="w-full xl:w-2/5 flex flex-col lg:flex-row xl:flex-col gap-4">
          <div className="w-full min-h-[12rem] lg:min-h-[16rem] rounded-xl p-4 border">
            <h3>Githb Globe</h3>
            <p>I'm very flexible with time zone communication</p>
          </div>
          <div className="w-full min-h-[12rem] lg:min-h-[16rem] rounded-xl p-4 border">
            <h3>Socials</h3>
            <p>Catch up with me on social media</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row w-full mt-4">
        <div className="w-full xl:w-2/5 flex flex-col gap-4">
          <div className="w-full min-h-[12rem] lg:min-h-[16rem] rounded-xl p-4 border">
            <h3>Quote</h3>
            <p>An enthusiastic with a passion for technology</p>
          </div>

          <div className="w-full min-h-[12rem] lg:min-h-[16rem] rounded-xl p-4 border">
            <h3>Copy my email</h3>
            <p>Let's create something beautiful</p>
          </div>
        </div>
        <div
          className="w-full xl:w-3/5 min-h-[24rem] lg:min-h-[32rem] rounded-xl p-4 lg:p-10 border flex flex-col justify-between"
          aria-label="tech stack"
        >
          <div className="w-full flex items-center text-center">
            <h4 className="w-full font-semibold text-lg md:text-xl lg:text-2xl">My Tech Stack</h4>
          </div>
          <div className="pt-4 lg:pt-10">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
