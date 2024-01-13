// Procurando menor valor e removendo.
function removerMenorPropriedade(meuObjeto) {
    let menorValor = Infinity;
    let propriedadeMenorValor;

    for (let propriedade in meuObjeto) {
        if (meuObjeto.hasOwnProperty(propriedade)) {
            if (meuObjeto[propriedade] < menorValor) {
                menorValor = meuObjeto[propriedade];
                propriedadeMenorValor = propriedade;
            }
        }
    }
    delete meuObjeto[propriedadeMenorValor];
    return meuObjeto;
}

let meuObjeto1 = {"a": 1, "b": 2, "c": 3};
console.log(removerMenorPropriedade(meuObjeto1));

let meuObjeto2 = {"d": 32, "e": 22, "j": 98};
console.log(removerMenorPropriedade(meuObjeto2));