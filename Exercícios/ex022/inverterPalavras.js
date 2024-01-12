function main(palavra){
    let nova = [];
    let n = [];

    for(let i = 0; i < palavra.length; i++){
        nova.unshift(palavra[i]);
    }

    for(let j = 0; j < nova.length; j++){
        n += nova[j];
    }
    console.log(n);
}

main("Natanael");