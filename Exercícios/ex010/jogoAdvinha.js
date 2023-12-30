let numeroEscolhido = Math.floor((Math.random() * 9) + 1),
    acertou = false,
    palpite = '';

do{
    palpite = prompt('Qual o seu numrero?', 0);
    console.log('Continuando');
    if(parseInt(palpite) === numeroEscolhido){
        acertou = true;
    }

}while(palpite !== '' && parseInt(palpite) !== numeroEscolhido);

if(acertou){
    console.log('Vitoria');
}else{
    console.log('Errou');
}
