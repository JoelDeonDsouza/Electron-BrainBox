import { CreateIdea, DeleteIdea, GetIdeas, ReadIdea, WriteIdea } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getIdeas: (...args: Parameters<GetIdeas>) => ipcRenderer.invoke('getIdeas', ...args),
    readIdea: (...args: Parameters<ReadIdea>) => ipcRenderer.invoke('readIdea', ...args),
    writeIdea: (...args: Parameters<WriteIdea>) => ipcRenderer.invoke('writeIdea', ...args),
    createIdea: (...args: Parameters<CreateIdea>) => ipcRenderer.invoke('createIdea', ...args),
    deleteIdea: (...args: Parameters<DeleteIdea>) => ipcRenderer.invoke('deleteIdea', ...args)
  })
} catch (e) {
  console.log(e)
}
