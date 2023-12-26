let hora = 13.39;

if (hora >= 6 && hora <= 11.59){
    console.log("Bom dia!");
} else if(hora >= 12 && hora <= 18.59){
    console.log("Boa tarde!");
}else if(hora >= 19 && hora <= 23.59){
    console.log("Boa noite!");
}else{
    console.log("Boa madrugada!");
}