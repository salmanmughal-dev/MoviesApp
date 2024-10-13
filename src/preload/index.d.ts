import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI & {
      store: {
        // @ts-ignore will be improved
        get: (key: string) => object | Array | string | number
        set: (key: string, val: object | Array | string | number) => void
        // any other methods you've defined...
      }
    }
    api: {
      getDepartments: () => Promise<Array<object>>
      editEmployee: (record) => Promise<void>
      generatePayroll: () => Promise<void>
    }
  }
}
