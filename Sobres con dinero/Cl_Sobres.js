export default class Cl_Sobres{
    constructor(){
        this.sobres=[];
    }
    agregarSobre(s){
        this.sobres.push(s);
    }
    infoSobre(){
        return this.sobres.map(s=>({
            aporte: s.valorBillete * s.cantidad,
        }))
    }
    totalDinero(){
        let total=this.sobres.reduce((acum,s)=>(acum+(s.valorBillete*s.cantidad)),0);
        return total;
    }
}