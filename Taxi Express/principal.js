/*
TAXI EXPRESS 
La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que, por 
el aumento de su cartera de clientes, necesita un sistema automatizado que le permita llevar 
ciertas estadísticas. Para ello por cada cliente que atiende le toma los siguientes datos: nombre, 
tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), edad y sexo (1. Masculino o 2. 
Femenino). Es significativo para la empresa, obtener un reporte que contenga: a) Cantidad de 
clientes femeninas mayores de edad, b) cuál ha sido la menor edad atendida, c) promedio de 
edad de los clientes. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (20 años) tomó servicio corto, Ana (19) largo, Lin 
(18) corto, y Mary (15) largo: 
Cantidad de clientes femeninas mayores de edad: 2 
La menor edad atendida fue de 15 años 
El promedio de edad de los clientes es de 18 años 
*/
import Cl_Cliente from "./Cl_Cliente.js";
import Cl_EmpresaTaxi from "./Cl_EmpresaTaxi.js";
let empresa=new Cl_EmpresaTaxi();
let cliente1=new Cl_Cliente("Juan","Corto Urbano",20,1);
let cliente2=new Cl_Cliente("Ana","Largo Urbano",19,2);
let cliente3=new Cl_Cliente("Lin","Corto Urbano",18,2);
let cliente4=new Cl_Cliente("Mary","Largo Urbano",15,2);
empresa.agregarCliente(cliente1);
empresa.agregarCliente(cliente2);
empresa.agregarCliente(cliente3);
empresa.agregarCliente(cliente4);
console.log("Cantidad de clientes femeninas mayores de edad: "+empresa.feminasMayoresDeEdad()+"\n");
console.log("La menor edad atendida fue de "+empresa.menorEdad()+"\n");
console.log("El promedio de edad de los clientes es de "+empresa.promedioEdad());