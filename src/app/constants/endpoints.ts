export const endpoints: any = {
  urlRest: "http://192.168.1.15:4237",
  tradfri: {
    ip: "/tradfri/ip",
    getDevices: "/tradfri/devices/get",
    getColors: "/tradfri/devices/colors"
  },
  devices: {
    blind: {
      setPosition: "/device/blind/position"
    },
    light: {
      onOff: "/device/light/onOff",
      brightness: "/device/light/brightness",
      color: "/device/light/color"
    }
  },
  starter: {
    getStatus: "/starter/status",
    set: "/starter/set"
  }
}
