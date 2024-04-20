'use client'
import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

export function GradientButton({ children }) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex items-center space-x-2"
      >
        <span className="flex gap-2">{children}</span>
      </HoverBorderGradient>
    </div>
  )
}
