import { ipcMain } from "electron";

ipcMain.handle("health-check", () => {
  return "ok";
});
