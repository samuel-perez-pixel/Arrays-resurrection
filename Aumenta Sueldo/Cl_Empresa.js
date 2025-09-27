export default class Cl_Empresa {
    constructor(){
        this.arrayPersonal=[];
    }
    agregarPersonal(p){
        this.arrayPersonal.push(p);
    }
    
    sueldoNuevo(){
        return this.arrayPersonal.map(p=>({
            cedula: p.cedula,
            nuevoSueldo: p.sueldo + p.aumento()
        }))
    }
    
    totalPagoNuevo(){
       return this.acumPagoNuevo=this.arrayPersonal.reduce((acum,p)=>(acum+p.aumento()),0);
       //return this.acumPagoNuevo;
    }

    porcentajeObrero(){
        let cntObreros=0;
        this.arrayPersonal.forEach((p)=>{
            if(p.tipo==1){
                cntObreros++;
            }
        });
        return ((cntObreros/this.arrayPersonal.length))*100;
    }
}
/*totalPagoNuevo() {
    return this.arrayPersonal.reduce((acum, p) => acum + p.aumento(), 0);
}

*/