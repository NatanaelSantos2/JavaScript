let a = 10;
let b = 10;
let c = 10;
let d = 10;

media = ((a + b + c + d) / 4).toFixed(1);
let conceito;

if(media > 4){
    if(media >= 4 && media <= 5.9){
        conceito = "D";
    }else if(media >= 6 && media <=7.4){
        conceito = "C";
    }else if(media >= 7.5 && media <= 8.9){
        conceito = "B";
    }else{
        conceito = "A";
    }
}else{
    conceito = "C";
}

console.log('Você tirou:', conceito, ' e sua Media foi: ',media);