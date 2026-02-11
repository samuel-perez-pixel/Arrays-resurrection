export default class Jugador{
    constructor(nombre,carta1,carta2,carta3){
        this.nombre=nombre;
        this.carta1=carta1;
        this.carta2=carta2;
        this.carta3=carta3;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    setCarta1(carta1){
        this.carta1=carta1;
    }
    setCarta2(carta2){
        this.carta2=carta2;
    }
    setCarta3(carta3){
        this.carta3=carta3;
    }
    getNombre(){
        return this.nombre;
    }
    getCarta1(){
        return this.carta1;
    }
    getCarta2(){
        return this.carta2;
    }
    getCarta3(){
        return this.carta3;
    }

    totalPuntos(){
        return this.carta1 + this.carta2 + this.carta3;
    }

}