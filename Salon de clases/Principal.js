/*1. SALÓN DE CLASES 
Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre, 
edad y sexo). El dato sexo es una letra F o M (femenino - masculino). Se desean procesar estos 
registros de estudiantes para determinar: a. la edad promedio, b. el nombre del estudiante con 
mayor edad, c. el porcentaje de chicas que son mayor de edad. 
El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), la salida 
requerida presenta el siguiente formato: 
Edad promedio: 18.25 
Estudiante con mayor edad: José 
Porcentaje de chicas mayor de edad: 100% */ 
import Cl_mEstudiante from './Cl_mEstudiante.js';
import Cl_mSalon from './Cl_mSalon.js';
let salon=new Cl_mSalon();
let e1=new Cl_mEstudiante("Luis",16,"M");
let e2=new Cl_mEstudiante("Ana",19,"F");
let e3=new Cl_mEstudiante("José",20,"M");
let e4=new Cl_mEstudiante("Carmen",18,"F");
salon.agregarEstudiante(e1);
salon.agregarEstudiante(e2);
salon.agregarEstudiante(e3);
salon.agregarEstudiante(e4);
console.log("Edad promedio: "+salon.edadPromedio());
console.log("Estudiante con mayor edad: "+salon.estudianteMayor());
console.log(("Porcentaje de chicas mayor de edad: "+salon.porcentajeChicasMayorEdad())+" %");
//--- IGNORE ---
