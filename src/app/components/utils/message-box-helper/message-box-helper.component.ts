import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-box-helper',
  templateUrl: './message-box-helper.component.html',
  styleUrls: ['./message-box-helper.component.css']
})
export class MessageBoxHelperComponent implements OnInit {

  imgUrl: string = "";
  okButton: boolean = false;
  description: string = "";
  yesNoButton: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matRef: MatDialogRef<MessageBoxHelperComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.imgUrl = this.data.imgUrl;
    this.okButton = this.data.okButton;
    this.yesNoButton = this.data.yesNoButton;
    this.description = this.data.description;
  }

  closeMessageBox(): void {
    this.matRef.close();
  }

  closeWithBooleanResponse(response: boolean): void {
    this.matRef.close(response);
  }

}
