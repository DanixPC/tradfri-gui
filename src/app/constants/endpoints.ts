export const endpoints: any = {
  urlRest: "http://localhost:4237",
  tradfri: {
    ip: "/tradfri/ip",
    getDevices: "/tradfri/devices/get"
  },
  devices: {
    blind: {
      setPosition: "/device/blind/position"
    }
  },
  starter: {
    getStatus: "/starter/status",
    set: "/starter/set"
  }
}
