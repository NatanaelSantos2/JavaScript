let myArrowFunction = () => {
    console.log('Executou');
    return 'Resultado'
}

let myArrowFunction1 = () => 'Ola mundo';

let soma = (a, b) => {
    return a + b;
}

let resultado = myArrowFunction();
console.log(resultado);
console.log(myArrowFunction1());
console.log(soma(10, 20));
