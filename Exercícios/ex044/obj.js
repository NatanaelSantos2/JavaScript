function main(usuario) {
    const numUsuario = Object.keys(usuario);
    for ( let i = 0; i < numUsuario.length; i++) {
        const chave = numUsuario[i];
        console.log(usuario[chave]);
    }
}

main({"nome":"Ariel","sobrenome":"Sardinha","idade":29,"cpf":"999.999.999-11"});