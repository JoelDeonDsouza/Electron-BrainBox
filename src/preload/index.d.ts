import { GetIdeas, ReadIdea, WriteIdea } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      getIdeas: GetIdeas
      readIdea: ReadIdea
      writeIdea: WriteIdea
    }
  }
}
