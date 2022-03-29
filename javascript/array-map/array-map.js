/**
 * array.map((elemento,i,copia_del_arreglo)=>{})
 * Característica de map:
 * En todas las iteraciones se debe retornar el mismo elemento o uno diferente ya
 * que a partir de la función map, se obtiene un nuevo arreglo con todos esos elementos retornados
 */

/**
 * Del siguiente arreglo , retornar el doble de los números pares y la mitad de los números impares 
 */
const numeros = [15,12,46,78,50,152,155,13,50];
const resultados = numeros.map((numero)=>{
    if(numero%2===0){
        return numero*2;
    }else{
        return numero/2;
    }
})
console.log(resultados);

/**
 * OJO: La función map no es capaz de dicriminar a ningún elemento, la cantidad de elementos que retorna, siempre es la misma del arreglo original. Así que considerar retornar todos los elementos de todas formas (modificados o no modificados)
 */

const doblePares = numeros.map((numero1)=>{
    if(numero1%2===0){
        return numero1*2;
    }
})
console.log(doblePares);