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