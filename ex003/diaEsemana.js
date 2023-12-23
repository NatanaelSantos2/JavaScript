// Dias da semana
var numero = 2;
if (numero === 1) {
    console.log("Domingo");
} else if (numero === 2) {
    console.log("Segunda-feira");
} else if (numero === 3) {
    console.log("Terça-feira");
} else if (numero === 4) {
    console.log("Quarta-feira");
} else if (numero === 5) {
    console.log("Quinta-feira");
} else if (numero === 6) {
    console.log("Sexta-feira");
} else if (numero === 7) {
    console.log("Sábado");
} else {
    console.log("Dia Inválido");
}

// Outra forma
switch (numero) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda-feira"); break;
    case 3: console.log("Terça-feira"); break;
    case 4: console.log("Quarta-feira"); break;
    case 5: console.log("Quinta-feira"); break;
    case 6: console.log("Sexta-feira"); break;
    case 7: console.log("Sábado"); break;
    default:
        console.log("Dia Inválido");
}


// Mes
let mes = 7,
    nomeMes = '';

switch(mes){
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = 'Mês Inválido';
}

console.log(nomeMes);