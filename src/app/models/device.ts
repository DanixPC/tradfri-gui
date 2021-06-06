import { DeviceProperties } from './device-properties';
import { DeviceInfo } from './device-info';

export class Device {

  name: string;
  creationDate: Date;
  instanceId: number;
  deviceInfo: any;
  deviceProperties: DeviceProperties;

  blind: boolean;
  light: boolean;
  motionSensor: boolean;
  plug: boolean;
  remote: boolean;
  type: string;

  constructor(name: string, creationDate: Date, instanceId: number, deviceInfo: any, deviceProperties: DeviceProperties, blind: boolean, light: boolean, motionSensor: boolean, plug: boolean, remote: boolean, type: string) {
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
  }

}
