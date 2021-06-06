export class DeviceInfo {

  manufacturer: string;
  modelName: string;
  serial: string;
  firmwareVersion: string;
  devicePowerSource: any;
  batteryLevel: number;

  constructor(manufacturer: string, modelName: string, seria: string, firmwareVersion: string, devicePowerSource: any, batteryLevel: number) {
    this.manufacturer = manufacturer;
    this.modelName = modelName;
    this.serial = seria;
    this.firmwareVersion = firmwareVersion;
    this.devicePowerSource = devicePowerSource;
    this.batteryLevel = batteryLevel;
  }

}
