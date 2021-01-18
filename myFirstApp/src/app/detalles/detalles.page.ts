import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: number;
  constructor(private _activatedRoute : ActivatedRoute, private _productosService : ProductosService) { }

  ngOnInit() {
    this.id= +this._activatedRoute.snapshot.paramMap.get('id');
    console.log("he recibido un "+this.id);
    /*let res = this._productosService.getProducto(this.id);
    console.log("El nombre es " +res.nombre);
    console.log("La descripción es " +res.descripcion);
    console.log("La categoria es " +res.categoria);
    console.log("El precio es " +res.precio);*/
  }

}
