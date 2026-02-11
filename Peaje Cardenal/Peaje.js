export default class Peaje{
    constructor(){
        this.vehiculos=[];
        this.cntTipo1=0;
        this.cntTipo2=0;
        this.cntTipo3=0;
        
    }

    agregarVehiculo(v){
        this.vehiculos.push(v);
    }

    porcentajeTipo1(){
        this.vehiculos.forEach((v)=>{
            if(v.getTipo()==1){
                this.cntVehiculos++;
                this.cntTipo1++;
            }
        });
        return (this.cntTipo1/this.vehiculos.length)*100;
    }

    porcentajeTipo2(){
        this.vehiculos.forEach((v)=>{
            if(v.getTipo()==2){
                this.cntVehiculos++;
                this.cntTipo2++;
            }
        });
        return (this.cntTipo2/this.vehiculos.length)*100;
    }
    porcentajeTipo3(){
        this.vehiculos.forEach((v)=>{
            if(v.getTipo()==3){
                this.cntVehiculos++;
                this.cntTipo3++;
            }
        });
        return (this.cntTipo3/this.vehiculos.length)*100;
    }

    tarifaTotal(){
        let total= this.vehiculos.reduce((acum,v)=>(acum+v.tarifaPagar()),0);
        return total *(40/100);
    }

}