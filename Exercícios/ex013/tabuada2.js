function tabuada(numero = 0, limite = 10){ //Valor padrão numero = 0 e pode ter duas variavel.
    for(let i = 0; i <= limite; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

tabuada(8, 5);