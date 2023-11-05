import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  healthCheck: () => ipcRenderer.invoke("health-check"),
});
