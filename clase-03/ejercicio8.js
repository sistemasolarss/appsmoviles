// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de números
// y retorne un nuevo arreglo con cada número multiplicado por 2.
// ==============================================================================

function duplicar(arreglo) {
    let resultado = [];

    for (let i = 0; i < arreglo.length; i++) {
        resultado.push(arreglo[i] * 2);
    }

    return resultado;
}

// ¡Excelente que hayas creado un nuevo arreglo sin mutar el original! Esta transformación 1 a 1 de datos es el caso de uso perfecto para la función de orden superior .map():

function duplicar(arreglo) {
    return arreglo.map(num => num * 2);
}

console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));