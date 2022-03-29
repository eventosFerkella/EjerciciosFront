/**
 * Una funcion anonima no lleva nombre, por eso se coloca en una constante
 * o en una variable (const o let)
 */

const saludar =function(){
    console.log("saludando a jorge");
}

saludar();

/**
 * otro ejemplo usando operador ternario: condicion ? verdadero : falso
 * ?: entonces y : caso contrario
 */
const mayor = function(a,b){
    return a > b ? a : b;
}

console.log(mayor(50,20));