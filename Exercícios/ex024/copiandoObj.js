let meuObjeto = {
    "a": 1,
    "b": 2
};

function main(meuObjeto){
    let copia = JSON.stringify(meuObjeto);
    let novaCopia = JSON.parse(copia);
    return novaCopia;
}

console.log(main(meuObjeto));