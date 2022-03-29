/**
 * array.find((elemento,i,copia)=>{})
 * find retorna un solo elemento que coincida con una condición de busqueda para los elementos del arreglo y encontrado el elemento este es retornado y en caso nunca se encuentre el elemento o la condicion
 * el retorno sera undefined
 */

const dnis = ["10203040","51514326","32568596","15634128"];
/**buscando el dni 51514326*/
const encontrado = dnis.find((dni) => {
    if(dni==="51514326"){
        return dni;
    }
})

console.log(encontrado);