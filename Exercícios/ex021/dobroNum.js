function main(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma = numeros[i];
        console.log(soma * 2);
    }
    
}

main([1, 5, 3]);