export default class Cl_Agencia{
    constructor(){
        this.suscriptores=[];
    }
    agregarSuscriptor(s){
        this.suscriptores.push(s);
    }
    precioPagar(){
        return this.suscriptores.map(s=>({
            cedula: s.cedula,
            costoPlan: s.costoPlan(),
        }))
    }
    porcentajeSinConexion(){
        let sinConexion=this.suscriptores.reduce((sinconec,s)=>(s.tipoPlan=="c")?sinconec+1:sinconec,0);
        let total=this.suscriptores.length;
        return (sinConexion/total)*100;
    }
    planFavorito(){
        let cntA=0,
        cntB=0,
            cntC=0,
            favorito='';    
            this.suscriptores.forEach((s)=>{
                if(s.tipoPlan=="a")cntA++;else if(s.tipoPlan=="b")cntB++;else if(s.tipoPlan=="c")cntC++;{
             if(cntA>cntB && cntA>cntC){
            favorito='Plan A es el favorito';
         }else if(cntB>cntA && cntB>cntC){
            favorito='Plan B es el favorito';
         }else if(cntC>cntA && cntC>cntB){
            favorito='Plan C es el favorito';
         }else{
            favorito='Iguales de favorito: Plan A, Plan B y Plan C.'
                ;
         }
            }
        }
        );return favorito;
}}
