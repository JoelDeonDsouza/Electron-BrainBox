import { GetIdeas, ReadIdea, WriteIdea } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getIdeas: (...args: Parameters<GetIdeas>) => ipcRenderer.invoke('getIdeas', ...args),
    readIdea: (...args: Parameters<ReadIdea>) => ipcRenderer.invoke('readIdea', ...args),
    writeIdea: (...args: Parameters<WriteIdea>) => ipcRenderer.invoke('writeIdea', ...args)
  })
} catch (e) {
  console.log(e)
}
