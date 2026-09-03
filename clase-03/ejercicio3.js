// ==============================================================================
// Ejercicio 3: IMC (Índice de Masa Corporal)
// Consigna: El índice de masa corporal (IMC o BMI) se calcula con la fórmula:
// peso / altura^2. Escribí una función llamada `bmi` que reciba `peso` y `altura`,
// y retorne un string de acuerdo a las siguientes posibilidades:
// - "Bajo de peso" si BMI < 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es igual o mayor a 30
// ==============================================================================

function bmi(peso, altura) {
    let resultado = peso / altura ** 2;

    if (resultado <= 18.5) {
        return "bajar de peso";
    } else if (resultado <= 24.9) {
        return "normal";
    } else if (resultado <= 29.9) {
        return "sobrepeso";
    } else if (resultado >= 30) {
        return "obeso";
    } else {
        return "no";
    }
}

let peso = 50;
let altura = 80;
console.log(bmi(peso, altura));

// ------------------------------------------------------------------------------
// Devolución Docente (Prof. Axel):
// ------------------------------------------------------------------------------
// Muy bien el cálculo con el operador de potencia (** 2).
// ⚠️ Dos observaciones a tener en cuenta:
// 1. Respetar los textos exactos pedidos por la consigna (ej: "Bajo de peso", "Normal", "Sobrepeso", "Obeso").
// 2. En las pruebas, la altura debe pasarse en metros (ej: 1.80, no 80 cm).
// 3. Para no dejar ramas redundantes (como el 'else { return "no" }'), te dejo cómo estructurarla
//    usando una variable auxiliar con valor por defecto y un único return al final:

function bmiEstructurado(peso, altura) {
    const indice = peso / (altura ** 2);
    let diagnostico = "Obeso"; // Valor por defecto si supera los 30

    if (indice < 18.5) {
        diagnostico = "Bajo de peso";
    } else if (indice < 25) {
        diagnostico = "Normal";
    } else if (indice < 30) {
        diagnostico = "Sobrepeso";
    }

    return diagnostico;
}