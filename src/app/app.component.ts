import { SettingsFileNotFound, SettingsFileFoundButNull } from './constants/response-codes';
import { StarterService } from './services/starter/starter.service';
import { DialogAssistService } from './services/dialog-tools/dialog-assist/dialog-assist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loading: boolean = true;

  constructor(
    private dialogAssistService: DialogAssistService,
    private starterService: StarterService
  ) {

  }
  ngOnInit(): void {
    console.log("hola")
    this.checkStatus();
  }

  checkStatus(): void {
    this.starterService.getStatus().then(
      respuesta => {
        if(respuesta.message == SettingsFileNotFound || respuesta.message == SettingsFileFoundButNull) {
          this.openFirstStartDialog();
        } else {
          this.loading = false;
        }
        console.log(respuesta);
      }
    )
  }

  openFirstStartDialog(): void {
    this.dialogAssistService.openFirstStart().afterClosed().subscribe(
      respuesta => {
        if(respuesta) {
          this.loading = false;
        }
      }
    );
  }

  title = 'tradfri-gui';

}
