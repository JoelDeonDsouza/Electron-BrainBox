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

export const createEmptyIdeaAtom = atom(null, (get, set) => {
  const ideas = get(IdeasAtom)
  const title = `Ideas at ${ideas.length + 1}`
  const newIdea: IdeaInfo = {
    title,
    lastUpdated: Date.now()
  }
  // update //
  set(IdeasAtom, [newIdea, ...ideas.filter((idea) => idea.title !== newIdea.title)])
  set(selectedIdeaIndexAtom, 0)
})

export const deleteIdeaAtom = atom(null, (get, set) => {
  const ideas = get(IdeasAtom)
  const selectedIdea = get(selectedIdeaAtom)
  if (!selectedIdea) return
  set(
    IdeasAtom,
    ideas.filter((idea) => idea.title !== selectedIdea.title)
  )
  set(selectedIdeaIndexAtom, null)
})
