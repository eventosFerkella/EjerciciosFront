/**
 * Reto1: Crear un constructor (Clase) de nombre Alumno
 * Atributos de cada alumno serán:
 * >nombres: <string>
 * >apellidos: <string>
 * >notas: Array<number>
 * >dni: <string>
 * >promedioNotas: Function => función que calculará el promedio de todas las notas que tenga un alumno y retornará dicho promedio
 * OBS: el constructor, debe recibir todos los parámetros
 */

function Alumno(_nombres="",_apellidos="",_notas=[],_dni=""){
    let objAlumno = {
        nombres: _nombres,
        apellidos: _apellidos,
        notas:_notas,
        dni: _dni,
        promedioNotas: function(){
            let promedio = 0;
            let sumatoria = 0;
            this.notas.forEach((nota)=>{
                sumatoria += nota;
            })
            promedio=sumatoria / this.notas.length;
            return promedio;
        } 
    }
    return objAlumno;
}

objUno= new Alumno("Jorge","Chambi Palomino");
console.log(objUno);