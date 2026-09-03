// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos
// argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18
// y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los
// `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}
let edad = 18;
let ingresos = 1000;
console.log(calcularImpuestos(edad, ingresos));

// ------------------------------------------------------------------------------
// Devolución Docente (Prof. Axel):
// ------------------------------------------------------------------------------
// ¡Muy bien resuelto! La condición compuesta con && está perfecta.
// Para acostumbrarnos a la estructura limpia de variable auxiliar con valor por defecto y retorno único:

function calcularImpuestosEstructurado(edad, ingresos) {
    let impuesto = 0; // Valor por defecto

    if (edad >= 18 && ingresos >= 1000) {
        impuesto = ingresos * 0.4;
    }

    return impuesto;
}