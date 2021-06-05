export class SettingsModel {

  tradfriIp: string;
  tradfriSecurityCode: string;

  constructor(tradfriIp: string, tradfriSecurityCode: string) {
    this.tradfriIp = tradfriIp;
    this.tradfriSecurityCode = tradfriSecurityCode;
  }

}
