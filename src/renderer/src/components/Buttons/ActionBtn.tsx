import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionBtnProps = ComponentProps<'button'>

export const ActionBtn = ({ className, children, ...props }: ActionBtnProps) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
