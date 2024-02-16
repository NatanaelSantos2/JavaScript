function main(objeto) {
    delete objeto.nome;
    console.log(objeto);
 
}

main({
    nome: "TreinaWeb",
    idade: 24,
    ano: 2023
});