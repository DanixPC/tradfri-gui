import { DeviceService } from './../../../services/network/device/device.service';
import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { InputBlind } from 'src/app/models/input-blind';
import { InputLight } from 'src/app/models/input-light';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() device: Device | undefined;

  progressBarValue: number = 0;
  batteryLevelValue: number = 0;
  onOffCheck: boolean = false;
  onOffCheckText: string = "Off";
  sliderValue: number;

  hexAllowedColours: string[];

  max: number;
  min: number;

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.setVariables();
  }

  setVariables(): void {
    if(this.device.blind) {
      this.batteryLevelValue = this.device.deviceInfo["9"];
      this.min = 0;
      this.max = 100;
    }
    if(this.device.light) {
      this.deviceService.getHexAllowedColours().subscribe(
        respuesta => {
          this.hexAllowedColours = respuesta;
        }
      )
      this.onOffCheck = this.device.on;
      this.updateOnOffSwitch(false);
      this.sliderValue = this.device.brightness;
      this.max = 250;
      this.min = 0;
    }
  }

  setOnOffDevice(): void {
    let inputLight: InputLight = new InputLight();
    inputLight.lightId = this.device.instanceId;
    inputLight.onOff = this.onOffCheck;
    if(this.device.light) {
      this.deviceService.setLightOnOff(inputLight).subscribe(
        respuesta => {
          console.log(respuesta)
        }
      );
    }
  }

  setSlideValue(event: any): void {
    console.log(event.value)
    if(this.device.blind) {
      this.deviceService.setBlindPosition(new InputBlind(this.device.instanceId, event.value)).subscribe(
        respuesta => {
          console.log(respuesta)
        }
      );
    }
    if(this.device.light) {
      this.deviceService.setLightBrighness(new InputLight(this.device.instanceId, event.value)).subscribe(
        respuesta => {
          console.log(respuesta)
        }
      );
    }
  }

  updateOnOffSwitch(doAction?: boolean): void {
    console.log(this.onOffCheck);
    if(this.onOffCheck == true) {
      this.onOffCheckText = "On";
    } else {
      this.onOffCheckText = "Off";
    }
    if(!doAction) {
      this.setOnOffDevice();
    }

  }

  setLightColor(color: string) {
    let inputLight: InputLight = new InputLight();
    inputLight.lightId = this.device.instanceId;
    inputLight.hexColor = color;
    this.deviceService.setLightColor(inputLight).subscribe(
      respuesta => {
        console.log(respuesta)
      }
    );
  }

}
