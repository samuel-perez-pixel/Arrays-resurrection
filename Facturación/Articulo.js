export default class Articulo{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }

    setNombre(nombre){
        this.nombre=nombre;
    }
    setPrecio(precio){
        this.precio=precio;
    }
    setCantidad(cantidad){
        this.cantidad=cantidad;
    }   
    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    getCantidad(){
        return this.cantidad;
    }

    subtotal(){
        return this.precio*this.cantidad;
    }
}