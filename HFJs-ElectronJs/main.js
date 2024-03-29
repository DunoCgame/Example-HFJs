// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')

const path = require('path')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
	 nodeIntegration:true,
      preload:path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
     mainWindow.webContents.openDevTools()


  mainWindow.on('closed', function () {

    mainWindow = null
  })
}


app.on('ready', createWindow, 
Menu.setApplicationMenu(null)



)


app.on('window-all-closed', function () {
  
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  
  if (mainWindow === null) createWindow()
	   
})
