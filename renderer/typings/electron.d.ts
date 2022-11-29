import { IpcRenderer } from "electron"

/** 对应主进程暴露出来的electron api */
interface ElectronApis {
  ipcRenderer: IpcRenderer
}

declare global {
  interface Window {
    electron: ElectronApis
  }
}