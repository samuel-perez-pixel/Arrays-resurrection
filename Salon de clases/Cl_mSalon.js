import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_mSalon{
    constructor(){
        this.arrayEstud=[];
    }
    agregarEstudiante(e){
        this.arrayEstud.push(e);
    }

    edadPromedio(){
    let acumEdad=0,
        cntEstud=0;
    this.arrayEstud.forEach((e)=>{
             acumEdad+=e.edad;
             cntEstud++;
        });
        return acumEdad/cntEstud;    
    }   
    estudianteMayor(){
        let auxMayor=0;
        let auxNombre="";
    this.arrayEstud.forEach((e)=>{
            if(e.edad>auxMayor){
                auxMayor=e.edad;
                auxNombre=e.nombre;
            }
            });
            return auxNombre;
    }
    porcentajeChicasMayorEdad(){
        let contChicas=0;
        let contChicasMayor=0;
        this.arrayEstud.forEach((e)=>{
            if(e.sexo=="F"){
                contChicas++;
                if(e.edad>=18){
                    contChicasMayor++;
                }
            } 
    });
    return (contChicasMayor/contChicas)*100;
    }}
    
/*edadMayor() {
    let mayor = 0;
    this.estudiantes.forEach((e) => {
      if (e.edad > mayor) mayor = e.edad;
    });
    return mayor;
  }
  */