function dobro(n) {
    return n * 2;
}

function triplo(n) {
    return n * 3;
}

function aplicaFuncao(n, funcao) {
    return funcao(n);
}

console.log(aplicaFuncao(5, dobro)); // Saída: 10
console.log(aplicaFuncao(5, triplo)); // Saída: 15
