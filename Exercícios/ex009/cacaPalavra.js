
let palavra = 'carro'
    letra = 'a',
    total = 0,
    totalAProcurar = 1,
    indice = 0;


while(total < totalAProcurar && indice < palavra.length){
    if(palavra[indice] === letra){
        total++;
    }
    indice++;
}

if(total >= totalAProcurar){
    console.log('Sim');    
}else{
    console.log('Não');   
}
