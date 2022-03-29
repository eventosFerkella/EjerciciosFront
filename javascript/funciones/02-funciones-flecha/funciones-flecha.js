/**
 * las funciones flecha son igual que las funciones anonimas, la diferencia
 * es la sintaxis son mas modernas
 */


/**
 * 
 * @param {number} n 
 */
const leerUsuarios = (n) => {
    let nombres = [];
    for (let i=0; i<n;i++){
        nombres.push(prompt(`Ingrese el nombre ${i+1}`))
    }
    return nombres;
}

const arregloNombres =leerUsuarios(6);
console.log(arregloNombres);