export default class Taller{
    constructor(){
        this.participantes=[];
        this.cntEstudiantes=0;
        this.cntProfesores=0;
        this.cntInvitados=0;
    }
    agregarParticipante(p){
        this.participantes.push(p);
    }

    grupoMayoritario(){

        let grupo=''
        this.participantes.forEach((p)=>{
            if(p.getTipo()==1){
                this.cntEstudiantes++;
            }
            else if(p.getTipo()==2){
                this.cntProfesores++;
            }
            else if(p.getTipo()==3){
                this.cntInvitados++;
            }

            if(this.cntEstudiantes>this.cntProfesores && this.cntEstudiantes>this.cntInvitados){
                grupo= "Estudiantes";
            }
            else if(this.cntProfesores>this.cntEstudiantes && this.cntProfesores>this.cntInvitados){
                 grupo="Profesores";
            }
            else if(this.cntInvitados>this.cntEstudiantes && this.cntInvitados>this.cntProfesores){
                 grupo="Invitados";
            }

            else if(this.cntEstudiantes==this.cntProfesores && this.cntEstudiantes>this.cntInvitados){
                grupo= "Estudiantes y Profesores";
            }
            else if(this.cntEstudiantes==this.cntInvitados && this.cntEstudiantes>this.cntProfesores){
                grupo= "Estudiantes y Invitados";
            }
            else if(this.cntProfesores==this.cntInvitados && this.cntProfesores>this.cntEstudiantes){
                grupo= "Profesores y Invitados";
            }

            else{grupo='Todos los grupos tienen la misma cantidad de participantes';}
        })
        return grupo;
    }
    totalRecabado(){
        let total= this.participantes.reduce((acumPago,p)=>(acumPago+p.montoPagar()),0)
        return total;
    }
    impuestoOrganizadores(){
        return this.totalRecabado()*(30/100);
    }
}
