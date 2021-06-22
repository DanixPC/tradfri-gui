export class InputLight {

  lightId: number;
  brightness: number;
  onOff: boolean;
  hexColor: string;

  constructor(lightId?: number, brightness?: number, onOff?: boolean, hexColor?: string) {
    this.lightId = lightId;
    this.brightness = brightness;
    this.onOff = onOff;
    this.hexColor = hexColor;
  }

}
