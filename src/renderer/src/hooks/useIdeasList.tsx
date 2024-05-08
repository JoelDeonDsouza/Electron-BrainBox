import { IdeasAtom, selectedIdeaIndexAtom } from '@/store'
import { useAtom, useAtomValue } from 'jotai'

export const useIdeasList = ({ onSelect }: { onSelect?: () => void }) => {
  const ideas = useAtomValue(IdeasAtom)
  //update//
  const [selectedIdeaIndex, setSelectedIdeaIndex] = useAtom(selectedIdeaIndexAtom)
  const handleIdeaSelect = (index: number) => async () => {
    setSelectedIdeaIndex(index)

    if (onSelect) {
      onSelect()
    }
  }
  return {
    ideas,
    selectedIdeaIndex,
    handleIdeaSelect
  }
}
