console.log("Hola mundo JS desde el servidor")

// Promedio de 2 variables
let edad1 = 11
let edad2 = 33

console.log("Edad Promedio")
console.log((edad1 + edad2) / 2)

// Medir tiempo de procesos
console.time("miProceso")
    for(let i=0; i<1000000000; i++){

    }
console.timeEnd("miProceso")

// Objetos tipo tabla
let usuarios = [
    {nombre:"Diego", edad:"21"},
    {nombre:"Santiago", edad:"20"}
]

console.table(usuarios)
