import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tecnologia : string = "Tecnologia";
  hogar : string = "Hogar";
  inmobiliaria : string = "Inmobiliaria";
  motor : string = "Motor";
  opcion : string = ""; 
  ocultar_tecnologia: boolean = true;
  ocultar_inmobiliaria: boolean = true;
  ocultar_motor: boolean = true;
  type: string = "number";
  constructor() {}


  cambiar_Oculto() : void {
    if(this.opcion == this.tecnologia){
      this.ocultar_tecnologia = false;
      this.ocultar_inmobiliaria = true;
      this.ocultar_motor = true;
    } else if (this.opcion == this.inmobiliaria){
      this.ocultar_tecnologia = true;
      this.ocultar_inmobiliaria = false;
      this.ocultar_motor = true;
    } else if (this.opcion == this.motor){
      this.ocultar_tecnologia = true;
      this.ocultar_inmobiliaria = true;
      this.ocultar_motor = false;
    } else if (this.opcion == this.hogar){
      this.ocultar_tecnologia = true;
      this.ocultar_inmobiliaria = true;
      this.ocultar_motor = true;
    }
  }
}
