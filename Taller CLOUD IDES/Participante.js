export default class Participante{
    constructor(cedula,tipo,edad){
        this.cedula=cedula;
        this.tipo=tipo;
        this.edad=edad;
    }
    setCedula(cedula){
        this.cedula=cedula;
    }
    getCedula(){
        return this.cedula;
    }
    setTipo(tipo){
        this.tipo=tipo;
    }
    getTipo(){
        return this.tipo;
    }
    setEdad(edad){
        this.edad=edad;
    }
    getEdad(){
        return this.edad;
    }

    montoPagar(){
        switch(this.tipo){
            case 1:
                return 10;
            case 2:
                return 15;
            case 3: 
            return 20;

            default:
                return ('Tipo de participante no válido');

        }
    }
}