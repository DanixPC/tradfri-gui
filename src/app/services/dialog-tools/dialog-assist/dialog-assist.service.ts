import { WelcomePageComponent } from './../../../components/first-start-pages/welcome-page/welcome-page.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable, Type } from '@angular/core';
import { DialogAssistComponent } from 'src/app/components/utils/dialog-assist/dialog-assist.component';

@Injectable({
  providedIn: 'root'
})
export class DialogAssistService {

  constructor(public dialogoDinamico: MatDialog) { }

  openFirstStart(): MatDialogRef<DialogAssistComponent> {
    let data = {
      titulo: "Welcome to Tradfri GUI!",
      componente: WelcomePageComponent
    }
    return this.openDialog(DialogAssistComponent, 2, data);
  }

  private openDialog(componente: Type<any>, tamanio: number, data: any): MatDialogRef<any> {
    let dialogRef;
    switch(tamanio) {
      case 1: {
        let opciones: any = {
          width: "1000px",
          height: "800px",
          disableClose: true,
          data: data
        }
        dialogRef = this.dialogoDinamico.open(componente, opciones);
        break;
      }
      case 2: {
        let opciones: any = {
          disableClose: true,
          data: data
        }
        dialogRef = this.dialogoDinamico.open(componente, opciones);
        break;
      }
      case 3: {
        let opciones: any = {
          width: "100%",
          height: "100%",
          disableClose: true,
          data: data
        }
        dialogRef = this.dialogoDinamico.open(componente, opciones);
        break;
      }
      case 4: {
        let opciones: any = {
          width: "90%",
          height: "90%",
          disableClose: true,
          data: data
        }
        dialogRef = this.dialogoDinamico.open(componente, opciones);
        break;
      }
      default: {
        let opciones: any = {
          disableClose: true
        }
        dialogRef = this.dialogoDinamico.open(componente, opciones);
        break;
      }
    }
    return dialogRef;
  }
}
