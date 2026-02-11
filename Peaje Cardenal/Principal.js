import Vehiculo from "./Vehiculo.js";
import Peaje from "./Peaje.js";

let peaje= new Peaje();
let veh1= new Vehiculo('ABC123',1);
let veh2= new Vehiculo('DEF456',2);
let veh3= new Vehiculo('GHI789',3);
let veh4= new Vehiculo('JKL012',1);

peaje.agregarVehiculo(veh1);
peaje.agregarVehiculo(veh2);
peaje.agregarVehiculo(veh3);
peaje.agregarVehiculo(veh4);

peaje.vehiculos.forEach((v)=>{
    console.log('El vehiculo con placa '+v.getPlaca()+' Debe pagar: $'+v.tarifaPagar());
})

console.log(' ');
console.log('Porcentaje de vehiculos tipo 1: '+peaje.porcentajeTipo1()+'%');
console.log('Porcentaje de vehiculos tipo 2: '+peaje.porcentajeTipo2()+'%');
console.log('Porcentaje de vehiculos tipo 3: '+peaje.porcentajeTipo3()+'%');
console.log('La tarifa total a pagar por el peaje es: $'+peaje.tarifaTotal());