let numero = 3;
let fatorial = 1;
let representacaoFatorial = `${numero}! = `;

for (let i = numero; i > 0; i--) {
    fatorial *= i;
    representacaoFatorial += i;

    if (i > 1) {
        representacaoFatorial += ' x ';
    }
}

console.log(representacaoFatorial + ` = ${fatorial}`);