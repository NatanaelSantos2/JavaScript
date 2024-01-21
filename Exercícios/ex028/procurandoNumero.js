function main(procurando, ...numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] != procurando){
           console.log(numeros[i]);
        }

    }
}

main(5, 1,8,2);