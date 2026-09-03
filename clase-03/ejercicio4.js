// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si el número es múltiplo de 3.
// - "buzz" si el número es múltiplo de 5.
// - "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// - Si no cumple ninguna, retornar el mismo número.
// ==============================================================================

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }

    if (num % 3 === 0) {
        return "fizz";
    }

    if (num % 5 === 0) {
        return "buzz";
    }

    return num;
}
console.log(fizzBuzz(6));

// ------------------------------------------------------------------------------
//  Devolución Docente (Prof. Axel):
// ------------------------------------------------------------------------------
// ¡Muy bien! Identificaste correctamente que la condición combinada (% 3 && % 5) debe evaluarse primero.
// Te dejo cómo estructurarlo con una variable auxiliar con valor por defecto y un solo return al final:

function fizzBuzzEstructurado(num) {
    let resultado = num; // Valor por defecto si no es múltiplo de 3 ni de 5

    if (num % 3 === 0 && num % 5 === 0) {
        resultado = "fizzbuzz";
    } else if (num % 3 === 0) {
        resultado = "fizz";
    } else if (num % 5 === 0) {
        resultado = "buzz";
    }

    return resultado;
}