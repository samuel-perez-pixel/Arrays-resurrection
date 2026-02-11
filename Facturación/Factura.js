export default class Factura{
    constructor(){
        this.articulos=[];
    }

    agregarArticulo(a){
        this.articulos.push(a);
    }

    subtotalFactura(){
        let subtotal=this.articulos.reduce((acumTotal,art)=>(acumTotal+art.subtotal()),0)
        return subtotal;
    }

    IVA(){
        return this.subtotalFactura()*(16/100);
    }

    totalConIVA(){
        return this.subtotalFactura()+this.IVA();
    }
}