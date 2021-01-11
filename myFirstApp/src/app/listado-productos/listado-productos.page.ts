import { Component, OnInit } from '@angular/core';
import { IInmobiliaria, IMotor, IProducto, ITecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.page.html',
  styleUrls: ['./listado-productos.page.scss'],
})
export class ListadoProductosPage implements OnInit {

  tecnologia : string = "Tecnologia";
  hogar : string = "Hogar";
  inmobiliaria : string = "Inmobiliaria";
  motor : string = "Motor";
  opcion : string = ""; 
  ocultar_tecnologia: boolean = true;
  ocultar_inmobiliaria: boolean = true;
  ocultar_motor: boolean = true;
  type: string = "number";
  nombre: string;
  descripcion : string;
  categoria : string;
  precio : number;
  tipo_vehiculo : string;
  opcion2 : string = "";
  Km : number;
  fabricacion : number;
  opcion3: string = "";
  estado_producto : string;
  metros_cuadrados: number;
  num_banyos: number;
  num_habitaciones: number;
  localidad: string;
  productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [
    {
      "id" : 1,
      "nombre" : "Iphone 8",
      "descripcion" : "Móvil iphone 8 de segunda mano de la marca Apple.",
      "categoria" : "Tecnología",
      "precio" : 350.,
      "tipo_vehiculo": null,
      "Km" : null,
      "fabricacion": null,
      "metros_cuadrados": null,
      "num_banyos": null,
      "num_habitaciones": null,
      "localidad": null,
      "estado_producto": "Usado"
    }
  ];

  constructor(private _toastCtrl : ToastController) {}


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

  insertarMotor(){

    let motor: IMotor={"id": this.productos.length+1, 
                            "nombre": this.nombre,
                            "descripcion": this.descripcion,
                            "categoria": this.opcion,
                            "precio": this.precio,
                            "tipo_vehiculo": this.opcion2,
                            "Km" : this.Km,
                            "fabricacion": this.fabricacion
                                                    };

        this.productos.push(motor);

        this.presentToast();   

  }

  insertarTecno(){

    let tecno: ITecnologia={"id": this.productos.length+1, 
                            "nombre": this.nombre,
                            "descripcion": this.descripcion,
                            "categoria": this.opcion,
                            "precio": this.precio,
                            "estado_producto": this.opcion3
                                                    };

        this.productos.push(tecno);

        this.presentToast();   

  }

  insertar(){

    let inmob: IInmobiliaria={"id": this.productos.length+1, 
                            "nombre": this.nombre,
                            "descripcion": this.descripcion,
                            "categoria": this.opcion,
                            "precio": this.precio,
                            "metros_cuadrados": this.metros_cuadrados,
                            "num_banyos": this.num_banyos,
                            "num_habitaciones": this.num_habitaciones,
                            "localidad": this.localidad
                                                    };

        this.productos.push(inmob);

        this.presentToast();   

  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'El producto se ha insertado correctamente.',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  ngOnInit() {
  }

}
