
function getData() {
    return Promise.resolve([
        {
            cep: '01310-100',
            logradouro: 'Avenida Paulista',
            bairro: 'Bela Vista'
        },
        {
            cep: '05420-001',
            logradouro: 'Rua Oscar Freire',
            bairro: 'Pinheiros'
        },
        {
            cep: '08060-000',
            logradouro: 'Rua Serra de Jairé',
            bairro: 'Jardim Pedro José Nunes'
        }
    ]);
}

function filterData(enderecos, cep) {
    return Promise.resolve(enderecos.find((endereco) => endereco.cep === cep));
}

async function main(cep) {

    try {
        const enderecos = await getData();

        const endereco = await filterData(enderecos, cep);

        console.log(endereco);

    } catch (error) {
        console.log(error.message);
    }

}