const [dia, mes, ano, ...res] = [16, 4, 1993, 15, 10, 20];

console.log(dia, mes, ano);
console.log(res);

// let [preco1, preco2, ...preco3] = precos; // esta recebendo os valores 0, 1 e 2 dessa posição da lista.
// Spread ... ele espalha todo o resto na variavel preco3

// console.log(preco3);
let novoArray = [3, precos];
function minhafuncao(){
    return [7, 35];
}

let [valor1, valor2] = minhafuncao();


console.log(novoArray[1][3]);
