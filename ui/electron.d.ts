export interface ElectronApi {
  healthCheck: () => Promise<string>;
}

declare global {
  interface Window {
    electron: ElectronApi;
  }
}
