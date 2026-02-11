export default class Juego{
    constructor(){
        this.jugadores=[];
    }
    agregarJugador(j){
        this.jugadores.push(j);
    }

    ganador(){

        let auxGanador='';
        let auxPuntaje=0;
        let empate=false;

        this.jugadores.forEach((j)=>{
            if(j.totalPuntos()>auxPuntaje){
                auxPuntaje=j.totalPuntos();
                auxGanador=j.nombre;
                empate=false;
            }

            else if(j.totalPuntos()==auxPuntaje && j.totalPuntos()>0){
                empate=true;
                if(empate==true){
                    auxGanador='Empate';
                }
            }
        });
        return auxGanador;
    }
    menos10(){
        let cntMenos10=0;
        this.jugadores.forEach((j)=>{
            if(j.totalPuntos()<10){
                cntMenos10++;
            }
            
        });
        return ((cntMenos10/this.jugadores.length)*100);
    }

}