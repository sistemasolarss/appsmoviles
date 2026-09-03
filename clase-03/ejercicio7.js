// ==============================================================================
// Ejercicio 7: Número de Caracteres
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter (un string de longitud 1). La función debe retornar el número de
// veces que aparece dicho carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }

    return contador;
}

// ------------------------------------------------------------------------------
//  Devolución Docente (Prof. Axel):
// ------------------------------------------------------------------------------
// ¡Muy bien recorrido el string como un array de caracteres y el contador!
// Te dejo dos alternativas muy utilizadas en JS moderno (las vamos a ver en la clase de hoy):
// Opción A: Separar por el caracter con .split()
function numeroDeCaracteresA(str, caracter) {
    return str.split(caracter).length - 1;
}

// Opción B: Convertir a array con spread [...] y filtrar con .filter()
const numeroDeCaracteresB = (str, caracter) => [...str].filter(c => c === caracter).length;