import { app, BrowserWindow } from "electron";
import path from "path";
import "./handlers";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  loadUI(win);

  if (!app.isPackaged) {
    require("electron-reloader")(module);
  }
};

const loadUI = (win: BrowserWindow) => {
  app.isPackaged
    ? win.loadFile("../ui/dist")
    : win.loadURL("http://localhost:5588");
};

app.whenReady().then(() => {
  createWindow();
});
