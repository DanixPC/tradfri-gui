import { MessageBoxHelperComponent } from './../../../components/utils/message-box-helper/message-box-helper.component';
import { LoaderComponent } from './../../../components/utils/loader/loader.component';
import { Injectable, Type } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogAssistComponent } from 'src/app/components/utils/dialog-assist/dialog-assist.component';

@Injectable({
  providedIn: 'root'
})
export class DialogAssistDeep1Service {

  constructor(public dialogoDinamico: MatDialog) { }

  openMessageBoxHelperWithIMG(imgUrl: string, title: string): MatDialogRef<DialogAssistComponent> {
    let data = {
      titulo: title,
      imgUrl: imgUrl,
      okButton: true,
      componente: MessageBoxHelperComponent
    }
    return this.openDialog(DialogAssistComponent, 2, data);
  }

  openLoaderDialog(title: string): MatDialogRef<DialogAssistComponent> {
    let data = {
      titulo: title,
      componente: LoaderComponent
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
