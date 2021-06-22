import { DeviceProperties } from './device-properties';

export class Device {

  name: string;
  creationDate: Date;
  instanceId: number;
  deviceInfo: any;
  deviceProperties: DeviceProperties;

  on: boolean;
  brightness: number;

  blind: boolean;
  light: boolean;
  motionSensor: boolean;
  plug: boolean;
  remote: boolean;
  type: string;

  constructor(name: string, creationDate: Date, instanceId: number, deviceInfo: any, deviceProperties: DeviceProperties, blind: boolean, light: boolean, motionSensor: boolean, plug: boolean, remote: boolean, type: string, on: boolean, brightness: number) {
    this.name = name;
    this.creationDate = creationDate;
    this.instanceId = instanceId;
    this.deviceInfo = deviceInfo;
    this.deviceProperties = deviceProperties;
    this.blind = blind;
    this.light = light;
    this.motionSensor = motionSensor;
    this.plug = plug;
    this.remote = remote;
    this.type = type;
    this.on = on;
    this.brightness = brightness;
  }

}
