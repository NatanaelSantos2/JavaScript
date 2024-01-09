let tamanho = 1;

let matriz = [];

for (let i = 0; i < tamanho; i++) {
    let linha = [];

    for (let j = 0; j < tamanho; j++) {
        linha.push(i === j ? 1 : 0);
    }

    matriz.push(linha);
}

for (let i = 0; i < tamanho; i++) {
    console.log(matriz[i].join(" "));
}