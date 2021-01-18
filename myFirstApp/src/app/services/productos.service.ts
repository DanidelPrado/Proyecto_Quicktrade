import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { IInmobiliaria, IMotor, IProducto, ITecnologia } from '../interfaces';

@Injectable()
export class ProductosService{

    /*productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [
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
        },{
          "id" : 2,
          "nombre" : "Samsung Galaxy S10",
          "descripcion" : "Móvil Samsung Galaxy S10 nuevo de la marca Samsung.",
          "categoria" : "Tecnología",
          "precio" : 400.,
          "tipo_vehiculo": null,
          "Km" : null,
          "fabricacion": null,
          "metros_cuadrados": null,
          "num_banyos": null,
          "num_habitaciones": null,
          "localidad": null,
          "estado_producto": "Perfecto Estado"
        }
      ];

    getProductos():IProducto[]{
        return this.productos;
    }

    getProducto(id : number) :  IProducto{
        return this.productos.find(x => x.id == id);
    }
    */

    constructor(private _db: AngularFireDatabase){}

    setProductos(productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)){
        let ref = this._db.database.ref("Productos");
        ref.push(productos);
    }

    getProductos() : firebase.default.database.Reference{
      let ref = this._db.database.ref("Productos");
      return ref;
  }
}