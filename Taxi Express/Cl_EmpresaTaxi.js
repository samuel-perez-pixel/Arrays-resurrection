export default class Cl_EmpresaTaxi {
    constructor(){
        this.clientes=[];
    }
    agregarCliente(c){
        this.clientes.push(c);
    }
    feminasMayoresDeEdad(){
        let cntChicas=0,
            cntChicasMayores=0;
        this.clientes.forEach((c)=>{
            if(c.sexo==2){
                cntChicas++;
                if(c.edad>=18){
                    cntChicasMayores++;
                }
            }
        });
        return cntChicasMayores;
    }
    menorEdad(){
        let auxMenor=Infinity;
            
        this.clientes.forEach((c)=>{
            if(c.edad<auxMenor){
                auxMenor=c.edad;
            
            }
        });
        return auxMenor
    }
    promedioEdad(){
        let promedio=this.clientes.reduce((acum,c)=>(acum+c.edad),0)/this.clientes.length;
        return promedio;
    }
}