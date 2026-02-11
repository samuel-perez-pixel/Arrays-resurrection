export default class Vehiculo{

constructor(placa,tipo){
    this.placa=placa;
    this.tipo=tipo;
}

setPlaca(p){
    this.placa=p;
}

getPlaca(){
    return this.placa;
}

setTipo(t){
    this.tipo=+t;
}

getTipo(){
    return this.tipo;
}

tarifaPagar(){
    switch(this.tipo){
        case 1:
            return 10;
        case 2:
            return 20;
        case 3:
            return 50;
        default:
            return ('Tipo de vehiculo no válido ');
    }

}


}