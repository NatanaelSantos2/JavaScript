const frutas = ["maçã", "mamão", "laranja", "banana"];

for(let i = 1; i < frutas.length; i++) {
    const nomeFruta = frutas[i];
    const indiceFruta = frutas.indexOf(nomeFruta);
    console.log(`${indiceFruta}-${nomeFruta}`);
} 

frutas.forEach(function(fruta, indice, frutas) {
    //console.log(`${indice}-${frutas}`);
    console.log(frutas);
})

for(const indice in frutas) {
    console.log(indice);
}

for(const nome of frutas) {
    console.log(nome);
}
