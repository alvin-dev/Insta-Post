const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false, // oculta/mostrar barra de menu em cima 
    resizable: false, // posso ou não redimencionar a janella 
    fullscreenable: false, //pode ou não ser full screen
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // win.loadURL("https://youtube.com") //carrega um site 
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
