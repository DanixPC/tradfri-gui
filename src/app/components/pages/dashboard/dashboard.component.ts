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

  constructor(
    private tradfriService: TradfriService
  ) { }

  ngOnInit(): void {
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
          console.log(this.deviceList)
        }
      }
    )
  }

}
