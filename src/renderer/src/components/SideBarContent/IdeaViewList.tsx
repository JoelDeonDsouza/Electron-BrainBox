import { ideasMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { IdeaView } from './IdeaView'

export const IdeaViewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (ideasMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <li>Start crafting</li>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {ideasMock.map((idea) => (
        <IdeaView key={idea.title} {...idea} />
      ))}
    </ul>
  )
}
