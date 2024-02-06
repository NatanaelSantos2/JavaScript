function main(data){

    const dataFormatada = new Date(data);
    
    const diasSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const diaDaSemana = diasSemana[dataFormatada.getUTCDay()];
    const mes = meses[dataFormatada.getUTCMonth()];
    const dia = dataFormatada.getUTCDate();
    const ano = dataFormatada.getUTCFullYear();

    const dataFormatadaString = `${diaDaSemana}, ${mes} ${dia}, ${ano}`;
    console.log(dataFormatadaString);
}

main("2023-11-12T10:00:00Z");
