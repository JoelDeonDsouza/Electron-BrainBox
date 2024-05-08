import { ideasMock } from '@/store/mocks'
import { IdeaInfo } from '@shared/models'
import { atom } from 'jotai'

// get the idea info //
export const IdeasAtom = atom<IdeaInfo[]>(ideasMock)

// get the list //
export const selectedIdeaIndexAtom = atom<number | null>(null)

export const selectedIdeaAtom = atom((get) => {
  const ideas = get(IdeasAtom)
  const selectedIdeaIndex = get(selectedIdeaIndexAtom)
  if (selectedIdeaIndex == null) return null
  const selectedIdea = ideas[selectedIdeaIndex]
  return {
    ...selectedIdea,
    content: `Welcome to BrainBox! ${selectedIdeaIndex}`
  }
})
