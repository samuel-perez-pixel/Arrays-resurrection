/** 
 * SOBRES CON DINERO 
Se tienen N sobres con dinero, cada uno con billetes del mismo valor. De cada sobre se 
conoce el valor del billete y la cantidad. Se requiere determinar el total de dinero: a. en cada 
sobre, b. entre todos los sobres. 
El cliente entrega el siguiente formato para la presentación de la salida: 
El sobre Nº1 tiene $50 
El sobre Nº2 tiene $40 
El sobre Nº3 tiene $400 
El sobre Nº4 tiene $150 
El total entre todos los sobres es de $640 
Se procesaron para este ejemplo 4 sobres: a) 5 billetes de $10, b) 2 de $20, c) 4 de $100 y 
d) 3 de $50 
*/
import Cl_Sobre from "./Cl_Sobre.js";
import Cl_Sobres from "./Cl_Sobres.js";
let sobres=new Cl_Sobres();
let sobre1=new Cl_Sobre(10,5);
let sobre2=new Cl_Sobre(20,2);
let sobre3=new Cl_Sobre(100,4);
let sobre4=new Cl_Sobre(50,3);
sobres.agregarSobre(sobre1);
sobres.agregarSobre(sobre2);
sobres.agregarSobre(sobre3);
sobres.agregarSobre(sobre4);
let salida= sobres.infoSobre();
salida.forEach((s,i)=>{
    console.log("El sobre N°"+(i+1)+" tiene $"+s.aporte);
});
console.log("El total entre todos los sobres es de $"+sobres.totalDinero());