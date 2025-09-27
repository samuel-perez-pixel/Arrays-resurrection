export default class Cl_Personal {
    constructor(cedula,sueldo,tipo){
        this.cedula=cedula;
        this.sueldo=sueldo;
        this.tipo=tipo;
    }
    aumento(){
          if(this.tipo==1){
                return this.sueldo*(20/100);
            }else if(this.tipo==2){
                return this.sueldo*(10/100);
            }
        }
}