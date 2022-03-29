/**
 * Los constructores son creadores de objetos previamente definidos
 */
function Curso(_nombre="",_nivel="",_duracion="",_precio=0,_temas=[]){
    let objCurso = {
        nombre: _nombre,
        nivel: _nivel,
        nombreCompleto: function(){
            return "Curso de "+this.nombre+" - "+this.nivel
        },
        duracion: _duracion,
        precio: _precio,
        temas: _temas
    }
    return objCurso;
}

let objReact = new Curso();
let objNextJS = new Curso();
objReact.nombre ="React JS";
objReact.duracion="2 semanas";
objReact.nivel="Avanzado";
objNextJS.temas = ["SSR","Default Props"];

console.log(objReact);
console.log(objNextJS);
console.log(objReact.nombreCompleto());

objKotlin = new Curso("Kotlin","Basico");
console.log(objKotlin);