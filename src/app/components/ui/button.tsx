import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 md:h-12 px-6 py-2',
        icon: 'h-10 md:h-12 w-12',
        lg: 'h-10 md:h-12 rounded px-8',
        sm: 'h-9 rounded px-3',
      },
      variant: {
        default:
          'inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-card hover:text-accent-foreground',
        link: 'text-primary items-start justify-start underline-offset-4 hover:underline',
        outline:
          'inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  const ButtonComponentMap = {
    default: PrimaryButton,
    outline: OutlineButton,
    secondary: SecondaryButton,
  }

  const SelectedButton = ButtonComponentMap[variant] || GhostButton

  return <SelectedButton {...props}>{children}</SelectedButton>
}

export { Button, buttonVariants }

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#9333ea,35%,#c084fc,55%,#9333ea)] bg-[length:200%_100%] px-8 md:px-10 py-2 text-white font-medium transition-colors"
    >
      {children}
    </button>
  )
}

const SecondaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-lg border-2 border-background bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 md:px-10 py-2 text-secondary-foreground font-medium transition-colors"
    >
      {children}
    </button>
  )
}

const OutlineButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-lg p-[2px] md:p-[3px]"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#a855f7_50%,#3b82f6_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-8 md:px-10 py-2 text-sm font-medium backdrop-blur-3xl">
        {children}
      </span>
    </button>
  )
}

const GhostButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className="text-md">
      {children}
    </button>
  )
}
