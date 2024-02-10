function main(numeros) {
    let numero = numeros.sort();
    
    const lista = [];
    for(let i = 0; i < numero.length; i++) {

        const re = numero[i];
        const mult = re * 3;
        lista.splice(0, 0, mult);
    }
    console.log(lista.reverse());
}

main([51, 52, 74, 46, 20, 82, 59, 39, 77, 23]);