import Jugador from "./Jugador.js";
import Juego from "./Juego.js";
let IJuego=new Juego();

let j1= new Jugador('Juan',1,5,2),
    j2 = new Jugador('Jose',12,1,1),
    j3= new Jugador('Rosa',10,9,8),
    j4= new Jugador('Pacheco',10,9,8),
    j5= new Jugador('Saddam',10,10,10)

IJuego.agregarJugador(j1);
IJuego.agregarJugador(j2);
IJuego.agregarJugador(j3);
IJuego.agregarJugador(j4);
IJuego.agregarJugador(j5);


IJuego.jugadores.forEach((j)=>{
    console.log('El Jugador '+j.getNombre()+' Tiene un puntaje de '+j.totalPuntos())
})

console.log(' ')
console.log('El ganador es:'+IJuego.ganador());
console.log('El porcentaje de jugadores con menos de 10 puntos es:'+IJuego.menos10()+'%');