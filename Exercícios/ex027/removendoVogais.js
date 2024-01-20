function main(frase){
    let semVogal = '';
    for(let i = 1; i < frase.length; i++){
        if(frase[i] !== 'a' && frase[i] !== 'e' && frase[i] !== 'i' && frase[i] !== 'o' && frase[i] !== 'u' ){
            semVogal += frase[i];
        }
    }
    console.log(semVogal)
}

main("ola web developers");