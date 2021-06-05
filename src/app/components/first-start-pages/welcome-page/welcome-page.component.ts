import { MatDialogRef } from '@angular/material/dialog';
import { SettingsModel } from './../../../models/settings-model';
import { StarterService } from './../../../services/starter/starter.service';
import { DialogAssistDeep1Service } from './../../../services/dialog-tools/dialog-assist-deep-1/dialog-assist-deep-1.service';
import { TradfriService } from './../../../services/network/tradfri/tradfri.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  tradfriIp: string = "";
  tradfriSecurityCode: string = "";
  disabledIpInput: boolean = false;
  disabledAutodiscoverIpButton: boolean = false;

  constructor(
    private tradfriService: TradfriService,
    private dialogAssistDeep1Service: DialogAssistDeep1Service,
    private matRef: MatDialogRef<WelcomePageComponent>,
    private starterService: StarterService
  ) { }

  ngOnInit(): void {
  }

  discoverTradfriIp(): void {
    let matRef = this.dialogAssistDeep1Service.openLoaderDialog("Discovering Tradfri IP, it take a few minutes...");
    this.tradfriService.getTradfriIp().then(
      respuesta => {
        this.tradfriIp = respuesta.message;
        this.disabledIpInput = true;
        this.disabledAutodiscoverIpButton = true;
        matRef.close();
      }
    )
  }

  openHelper(): void {
    this.dialogAssistDeep1Service.openMessageBoxHelperWithIMG("http://localhost:4237/tradfri-bottom.png", "You can find it at the bottom of Tradfri");
  }

  checkInputs(): boolean {
    return this.tradfriIp.length > 0 && this.tradfriSecurityCode.length > 0;
  }

  sendSettings(): void {
    let settings: SettingsModel = new SettingsModel(this.tradfriIp, this.tradfriSecurityCode);
    this.starterService.setStartupSettings(settings).then(
      respuesta => {
        if(respuesta) {
          this.matRef.close(respuesta);
        }
      }
    )
  }

}
