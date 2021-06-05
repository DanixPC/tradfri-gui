import { Component, ComponentFactoryResolver, ComponentRef, Inject, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-assist',
  templateUrl: './dialog-assist.component.html',
  styleUrls: ['./dialog-assist.component.css']
})
export class DialogAssistComponent implements OnInit {

  titulo: String | undefined;
  @ViewChild('dynamicComponent', { static: true, read: ViewContainerRef }) myRef!: ViewContainerRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.titulo = this.data.titulo;
    this.cargarComponente();
  }

  cargarComponente(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.data.componente);
    const ref = this.myRef.createComponent(factory);
    //this.establecerVariables(this.data.componente, ref);
    ref.changeDetectorRef.detectChanges();
  }

  /*establecerVariables(componente: Type<any>, referencia: ComponentRef<unknown>): void {
    switch(componente) {
      case FichaClienteComponent: {
        referencia.instance["cliente"] = this.data.cliente;
      }
    }
  }*/
}
