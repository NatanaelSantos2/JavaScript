function main(data){


    const dataf = new Date(data);
        
    const iso = dataf.toISOString(); 
    const diaSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const mes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dia = iso.slice(8, 10); 
    const ano = iso.slice(0, 4); 
    const hora = iso.slice(11, 19); 
    const fuso = "Coordinated Universal Time"; 
    const resultado = diaSemana[dataf.getUTCDay()].concat(", ", mes[dataf.getUTCMonth()], " ", dia, ", ", ano, " at ", hora, " ", fuso); 
    console.log(resultado);
}
  
main("2025-12-12T10:00:00Z");
  