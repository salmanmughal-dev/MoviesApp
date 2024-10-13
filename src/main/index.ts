import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import * as sqlite3 from 'sqlite3'
const sqlite = sqlite3.verbose()
const db = new sqlite.Database('./src/main/database/voyager.db')
import Store from 'electron-store'

const store = new Store()

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    console.log('env', process.env['ELECTRON_RENDERER_URL'])
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

function CreateAnotherWindow(record): void {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/edit/employee/${record.employeeId}`)
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

function CreatePayrollWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/payroll/generate`)
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test

  createWindow()
  ipcMain.on('insert-user', (_, data) => {
    db.serialize(() => {
      db.all('SELECT * FROM department', (err, rows) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(rows)
      })
    })
    console.log(data)
  })

  ipcMain.on('electron-store-get', async (event, val) => {
    console.log('HaMza')

    // @ts-expect-error there is a type required here
    event.returnValue = store.get(val)
  })
  ipcMain.on('electron-store-set', async (_, key, val) => {
    console.log('HaMza')
    // @ts-expect-error there is a type required here
    store.set(key, val)
  })

  ipcMain.handle('edit-employee', async (event, record): Promise<void> => {
    CreateAnotherWindow(record)
  })

  ipcMain.handle('generate-payroll', async (): Promise<void> => {
    CreatePayrollWindow()
  })
  ipcMain.handle('get-departments', async (): Promise<Array<object>> => {
    console.log('departments........................')
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT 
    e.employeeid AS employeeId, 
    e.name AS employeeName, 
    e.position, 
    e.hireDate AS hireDate, 
    d.departmentid, 
    d.name AS departmentName, 
    d.managerid AS managerId
FROM 
    employee e
JOIN 
    department d
ON 
    e.departmentid = d.departmentid;
`,
        (err, rows: Array<object>) => {
          if (err) {
            console.error(err)
            reject(err)
          }
          console.log(rows)
          resolve(rows)
        }
      )
    })
  })
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
