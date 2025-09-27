export default class Cl_Suscriptor{
    constructor(cedula,tipoPlan){
        this.cedula=cedula;
        this.tipoPlan=tipoPlan;
    }
    costoPlan(){
        switch(this.tipoPlan){
            case 'a':
                return 3*(10/100)+3;
            case 'b':
                return 5*(10/100)+5;
            case 'c':
                return 10;
            default:
                return ('Plan no existente');
        }
    }
} 