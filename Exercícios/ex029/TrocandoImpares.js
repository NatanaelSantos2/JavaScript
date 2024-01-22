function main(numeros){
    let resultado = '';
    for(let i = 0; i < numeros.length; i++){
        let n = numeros[i];
        if(n % 2 == 0){
            resultado += numeros[i];
        }else{
            resultado += '*';
        }
    }
    console.log(resultado);
}

main([1, 5, 3, 2, 7, 8, 9, 4]);