import { contextBridge } from 'electron'

if (process.contextIsolated) {
  throw new Error('ContextIsolated must be enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //!
  })
} catch (e) {
  console.log(e)
}
