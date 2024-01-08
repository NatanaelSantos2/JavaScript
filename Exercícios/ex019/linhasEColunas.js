let colunas = 5;
let linhas = 5;
let li = '';

for(let i = colunas; i >= 1; i--){
    li += '*';
}

if(linhas >= 1){
    for(let i = linhas; i >= 1; i--){
        console.log(li);
    }
}else{
    console.log(li);
}