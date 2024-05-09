import { GetIdeas, ReadIdea } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      getIdeas: GetIdeas
      readIdea: ReadIdea
    }
  }
}
