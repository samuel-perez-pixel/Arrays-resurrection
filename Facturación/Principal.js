import Articulo from "./Articulo.js";
import Factura from "./Factura.js";

let factura= new Factura();

let art1= new Articulo('Harina',40,2),
art2= new Articulo('Arroz',45,4),
art3= new Articulo('Azucar',45,2),
art4= new Articulo('Pasta',47.5,3);

factura.agregarArticulo(art1);
factura.agregarArticulo(art2);
factura.agregarArticulo(art3);
factura.agregarArticulo(art4);

factura.articulos.forEach((art)=>{
    console.log('Subtotal de '+art.getNombre()+' $ '+art.subtotal());
});

console.log('-----------------------------');
console.log('');
console.log('Subtotal de la factura: $ '+factura.subtotalFactura());
console.log('IVA: $ '+factura.IVA());
console.log('Total con IVA: $ '+factura.totalConIVA());