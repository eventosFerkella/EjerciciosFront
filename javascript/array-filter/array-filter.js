/**
 * array.filter((elemento,i,copia)=>{})
 * mismo comportamiento de la funcion map sin embargo en filter se pueden discriminar a algunos elementos bajo algunas condiciones
 */

/**
 * OJO: RUTA PARA ESCRIBIR RAPIDO LA FUNCION ANONIMA FLECHA INSTALAR COMPLEMENTO ES7 REACT Y LUEGO ESCRIBIR anf y enter
 */

/**
 * des siguiente arreglo, retornar solo los elementos que ocupan posiciones impares
 */
const numeros = [15,12,46,5,50,99,10,50];
const posicionesImpares = numeros.filter((elemento,i) => {
    if(i%2!==0){
        return elemento;
    }
});

console.log(posicionesImpares);