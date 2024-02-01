function main(inicio, fim){
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);
    const dias = dataInicio.getTime() - dataFim.getTime();
    const contDias = dias / (1000 * 60 * 60 * 24);
    console.log(contDias);
}

main("2023-11-12T00:00:00Z", "2023-10-12T00:00:00Z");