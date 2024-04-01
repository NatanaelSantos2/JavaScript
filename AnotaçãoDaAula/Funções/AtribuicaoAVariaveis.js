function soma(valor1, valor2) {
    console.log('executou:', valor1, valor2)
    let resultado = valor1 + valor2;
    return resultado;
}

let resultado = soma;
let resultado2 = soma;

resultado(10, 10);
resultado2(20, 10);

let re = resultado(12, 8);
let re2 = resultado2(12, 4);

console.log('resultado: ', re, re2);
