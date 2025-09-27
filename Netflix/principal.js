/** NETFLIX 
Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así: A= 
suscripción $3, B= suscripción $5, C= suscripción $10; además el suscriptor debe pagar un 10% 
adicional del valor de la suscripción por servicio de conexión (menos el plan C, que ya lo incluye). 
En este sentido, se desea conocer: a) precio a pagar por cada suscriptor, b) porcentaje de 
suscriptores que no pagaron servicio de conexión, c) cuál es el plan favorito. 
La agencia manifiesta que el formato para la salida de los requerimientos solicitados es: 
El suscriptor con cedula 15457858 paga 3.3$ 
El suscriptor con cedula 15457859 paga 5.5$ 
El suscriptor con cedula 15457667 paga 10$ 
Porcentaje de suscriptores que no pagaron servicio de conexión: 33.33% 
Cuál es el plan favorito: Iguales de favorito: Plan A, Plan B y Plan C. 
La salida corresponde a los siguientes datos del suscriptor (cedula, tipo plan): 
(15457858, A) (15457859, B) (15457667, C) */
import Cl_Suscriptor from "./Cl_Suscriptor.js";
import Cl_Agencia from "./Cl_Agencia.js";
let s1=new Cl_Suscriptor(15457858,'a');
let s2=new Cl_Suscriptor(15457859,'b');
let s3=new Cl_Suscriptor(15457667,'c');
let agencia=new Cl_Agencia([s1,s2,s3]);
agencia.agregarSuscriptor(s1);
agencia.agregarSuscriptor(s2);
agencia.agregarSuscriptor(s3);
let salidad= agencia.precioPagar();
salidad.forEach(s=>{
    console.log("El suscriptor con cedula "+s.cedula+" paga "+s.costoPlan);
});
console.log("Porcentaje de suscriptores que no pagaron servicio de conexion: "+agencia.porcentajeSinConexion());
console.log("Cual es el plan favorito: "+agencia.planFavorito());