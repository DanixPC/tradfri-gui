import { TradfriService } from './../../../services/network/tradfri/tradfri.service';
import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  deviceList: Device[] = [];
  blindList: Device[] = [];
  lightList: Device[] = [];

  constructor(
    private tradfriService: TradfriService
  ) { }

  ngOnInit(): void {
    console.log("hola")
    this.requestDashboardData();
  }

  requestDashboardData(): void {
    this.getAllDevices();
  }

  getAllDevices(): void {
    this.tradfriService.getAllDevices().subscribe(
      respuesta => {
        if(respuesta) {
          this.deviceList = respuesta;
          this.filterDevices();
          console.log(this.deviceList);
        }
      }
    )
  }

  filterDevices(): void {
    for(let device of this.deviceList) {
      if(device.blind) {
        this.blindList.push(device);
      }
      if(device.light) {
        this.lightList.push(device);
      }
    }
  }

}
