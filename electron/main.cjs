const { app, BrowserWindow, ipcMain, Tray, Menu } = require("electron");
const path = require("path");

var win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "build/brow-icon.ico",
    title: "ShApp",
    autoHideMenuBar: true,
  });
  win.webContents.openDevTools();
  // win.loadFile(path.join(app.getAppPath(), "dist/index.html"));
  win.loadURL("http://127.0.0.1:3002/");
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
