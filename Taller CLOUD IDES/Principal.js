import Participante from "./Participante.js";
import Taller from "./Taller.js";

let taller= new Taller();

let p1= new Participante('11111',1,17),
p2= new Participante('22222',2,45),
p3= new Participante('33333',3,25),
p4= new Participante('44444',1,18),
p5= new Participante('55555',3,19),
p6= new Participante('66666',2,50);


taller.agregarParticipante(p1);
taller.agregarParticipante(p2);
taller.agregarParticipante(p3);
taller.agregarParticipante(p4);
taller.agregarParticipante(p5);
taller.agregarParticipante(p6);

taller.participantes.forEach((p)=>{
    console.log('El participante con cedula '+p.getCedula()+' debe pagar $ '+p.montoPagar());
})

console.log('-----------------------------');
console.log('');
console.log('El grupo mayoritario es: '+taller.grupoMayoritario());
console.log('Total recabado: $ '+taller.totalRecabado());
console.log('Impuesto para los organizadores: $ '+taller.impuestoOrganizadores());