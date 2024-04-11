function calculador(valorX, valorY){
    console.log(valorX + valorY)
}

calculador(5, 10); // Saída: 15

//Atividade2 Parâmetros com valor default
function calculador2(valorX, valorY = 10) {
    console.log(valorX, valorY);
}

calculador2(5); // Saída: 5 10
