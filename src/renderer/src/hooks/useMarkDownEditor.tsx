import { selectedIdeaAtom } from '@/store'
import { useAtomValue } from 'jotai'

export const useMarkDownEditor = () => {
  const selectedIdeaData = useAtomValue(selectedIdeaAtom)
  return {
    selectedIdeaData
  }
}
