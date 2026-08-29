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