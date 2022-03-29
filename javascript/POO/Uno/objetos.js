/**
 * POO a partir de la semana 5, video 18
 */

let objPersona = {
    nombre: "Jorgito",
    direccion: "Calle Siempre Viva",
    platosFavoritos: ["Ceviche","Rocoto Relleno","Aji de gallina"],
    objUbicacion: {
        lat: -70.1324,
        lon: -16.5135
    }
}

//Mostrando atributos de un objeto
//Forma 1: (mas usada)
console.log(objPersona.platosFavoritos)
console.log(`Latitud: ${objPersona.objUbicacion.lat}`)
//Forma 2:
console.log(objPersona["direccion"])

//Imprimir uno a uno los platos favoritos
objPersona.platosFavoritos.forEach((plato,i)=>{
    console.log(`Plato ${i+1}: ${plato}`);
})
//Modificar un atributo de un objeto
objPersona.nombre = "Jorge Luis";
console.log(objPersona);
//Objetos con atributos en forma de STRING
//nro-llantas es un objeto stringfied y solo se puede de esta manera
const objVehiculo = {
    "marca": "Mazda",
    "color": "Cafe",
    "nro-llantas": 4
}
console.log(objVehiculo["nro-llantas"]);
//Creando nuevos atributos a un objeto ya establecido
objVehiculo.modelo= "CX-3";
console.log(objVehiculo)
