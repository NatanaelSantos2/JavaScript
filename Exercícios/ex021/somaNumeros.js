function soma(...numeros){
    let total = 0;
    for( let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    return total;
}

console.log(soma(3, 5, 6, 8, 9));