let nombre = "Jorge Luis";
let edad = 41;

alert("Bienvenidos ...");
console.log(`Mi nombre es: ${nombre} y tengo ${edad}`);


let numero = "60";
let copia = +numero;
console.log(typeof copia)

/*Arreglos*/
let edades = [25, 32, 45, 60, 28];
/**Mostrando un elemento del arreglo */
console.log(edades[2]);

/**Obteniendo la longitud de un arreglo */
console.log(edades.length);

/**Modificar un elemento del arreglo */
edades[4]=-21
console.log(edades);

/**Agregar un elemento */
edades.push(75);

/**Recorrer un arreglo */
for(let i=0; i<edades.length; i++){
    console.log(edades[i])
}

