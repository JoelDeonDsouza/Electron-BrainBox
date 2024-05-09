import { IdeaContent, IdeaInfo } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'

const loadIdeas = async () => {
  const ideas = await window.context.getIdeas()
  // categorise the recently loaded //
  return ideas.sort((a, b) => b.lastUpdated - a.lastUpdated)
}

const ideasAtomAsync = atom<IdeaInfo[] | Promise<IdeaInfo[]>>(loadIdeas())

// get the idea info //
export const IdeasAtom = unwrap(ideasAtomAsync, (prev) => prev)

// get the list //
export const selectedIdeaIndexAtom = atom<number | null>(null)

const selectedIdeaAtomAsync = atom(async (get) => {
  const ideas = get(IdeasAtom)
  const selectedIdeaIndex = get(selectedIdeaIndexAtom)
  if (selectedIdeaIndex == null || !ideas) return null
  const selectedIdea = ideas[selectedIdeaIndex]
  const ideaContent = await window.context.readIdea(selectedIdea.title)
  return {
    ...selectedIdea,
    content: ideaContent
  }
})

export const selectedIdeaAtom = unwrap(
  selectedIdeaAtomAsync,
  (prev) =>
    prev ?? {
      title: '',
      content: '',
      lastUpdatedAt: Date.now()
    }
)

export const saveIdeaAtom = atom(null, async (get, set, newContent: IdeaContent) => {
  const ideas = get(IdeasAtom)
  const selectedIdea = get(selectedIdeaAtom)
  if (!selectedIdea || !ideas) return
  await window.context.writeIdea(selectedIdea.title, newContent)
  set(
    IdeasAtom,
    ideas.map((idea) => {
      if (idea.title === selectedIdea.title) {
        return {
          ...idea,
          lastUpdatedAt: Date.now()
        }
      }
      return idea
    })
  )
})

export const createEmptyIdeaAtom = atom(null, (get, set) => {
  const ideas = get(IdeasAtom)
  if (!ideas) return
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
  if (!selectedIdea || !ideas) return
  set(
    IdeasAtom,
    ideas.filter((idea) => idea.title !== selectedIdea.title)
  )
  set(selectedIdeaIndexAtom, null)
})
