import { selectedIdeaAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const SelectedIdeaTitle = useAtomValue(selectedIdeaAtom)
  if (!SelectedIdeaTitle) return null
  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{SelectedIdeaTitle.title}</span>
    </div>
  )
}
