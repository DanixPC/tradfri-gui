import { DeviceService } from './../../../services/network/device/device.service';
import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { InputBlind } from 'src/app/models/input-blind';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() device: Device | undefined;

  progressBarValue: number = 0;
  batteryLevelValue: number = 0;

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.batteryLevelValue = this.device.deviceInfo["9"];
    console.log(this.device.deviceInfo["1"]);
  }

  setBlindPosition(event: any): void {
    console.log(event.value)
    this.deviceService.setBlindPosition(new InputBlind(this.device.instanceId, event.value)).subscribe(
      respuesta => {
        console.log(respuesta)
      }
    );
  }

}
