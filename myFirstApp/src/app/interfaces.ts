export interface IProducto{
    "id" : number,
    "nombre" : string,
    "descripcion" : string,
    "categoria" : string,
    "precio" : number
}

export interface IMotor extends IProducto{
    "tipo_vehiculo" : string,
    "Km" : number,
    "fabricacion": number
}

export interface IInmobiliaria extends IProducto{
    "metros_cuadrados": number,
    "num_banyos": number,
    "num_habitaciones": number,
    "localidad": string
}

export interface ITecnologia extends IProducto{
    "estado_producto": string
}

export interface IMeGusta{
    "id_usuario": number,
    "nombre_prod" : string
}