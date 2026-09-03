// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contraseñavalida (str) {
    return  ( str === "2Fj(jjbFsuj" || "eoZiugBf&g9");
}
let str = "pepito";
let str = "eoZiugBf&g9";
contraseñavalida(str);
console.log(bmi(peso, altura));

// ------------------------------------------------------------------------------
// Devolución Docente (Prof. Axel):
// ------------------------------------------------------------------------------
// ⚠️ Ojo con un detalle conceptual muy importante en el operador lógico OR (||):
// Cuando escribís: `str === "2Fj(jjbFsuj" || "eoZiugBf&g9"`
// JavaScript evalúa `"eoZiugBf&g9"` por separado como un valor 'truthy' (verdadero),
// por lo que la función SIEMPRE devolverá `"eoZiugBf&g9"` y nunca 'false'!
// Tenés que comparar la variable en ambos lados: `str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9"`.
//
// Además:
// 1. Evitar usar la letra 'ñ' en nombres de funciones (mejor 'contrasenaValida').
// 2. Ojo al declarar dos veces 'let str' en el mismo archivo porque genera un SyntaxError.
//
// Te dejo dos formas de estructurarla correctamente:
// Opción A (Estructurada con variable auxiliar con valor por defecto y retorno único):
function contrasenaValida(str) {
    let retorno = false; // Valor por defecto

    if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
        retorno = true;
    }

    return retorno;
}

// Opción B (Retorno booleano directo):
// function contrasenaValida(str) {
//     return (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9");
// }