/* const data1 = new Date();
const data2 = new Date("December 17, 2022, 07:00:23.001z");
const data3 = new Date("2024-11-13T13:15:01z");
var mes = 5
const data4 = new Date(2020, mes - 1, 10, 11 -3, 13, 15);
const data5 = new Date.UTC(2020, mes -1, 10, 11, 13, 15);
const data6 = new Date(data5);

console.log("Data 1: ",data1);
console.log("Data 2: ",data2);
console.log("Data 3: ",data3);
console.log("Data 4: ",data4);
console.log("Data 5: ",data5);
console.log("Data 6: ",data6); */

//1 janeiro de 1970 as 00:00:00 UTC

//formas de epga o timesTemp1
/* const data = new Date();
const timesTemp1 = Date.now();

console.log(timesTemp1);
console.log(data.getTime());
console.log(+new Date()); */


//calculando quantos segundos passaram
/* const dataInicio = Date.now();
//atual: 05 milesegundos: 03 = 05 - 03 = 2
setTimeout(() => {
    const milisegundos = Date.now() - dataInicio;

    console.log(milisegundos / 1000);
}, 2000) */

/* const data1 = new Date('2023-11-15');
const data2 = new Date('2023-12-15');
const diffTime = data2.getTime() - data1.getTime();

const diffDays = diffTime / (1000 * 60 * 60 * 24);

console.log(diffDays); */

/* const data = new Date('2023-10-01T12:00:05Z');

//dia dos mes é de 01 ao 30
const dia = data.getDate();

//dia da semana que segunda feria é valor 0
const diaSemana = data.getDay();

//mes do ano que janeiro começa com o valor sendo 0
const mes = data.getMonth();

//Retorna o ano
const ano = data.getFullYear();

console.log('Dia do mês ', dia)
console.log('Dia da semana ', diaSemana);
console.log('Mes do ano ', mes);
console.log('Ano ', ano); */

// nes Date(2023, 4 -1, 16)
/* const data = new Date('2023-04-16T12:00:05Z');
const dia = data.getDate().toString().padStart(2, '0'); //analise dois valor
const mes = (data.getMonth() + 1).toString().padStart(2, '0');
const ano = data.getFullYear();

console.log(`${dia}/${mes}/${ano}`); */

/* const data = new Date('2023-04-16T05:12:10Z');

//Altera o dia mes e ano
data.setFullYear(2022);
data.setMonth(0);
data.setDate(24);

//altera a hora minuto e segundos
data.setHours(20 - 3, 21, 10)
data.setMinutes(40);
data.setSeconds(15);
data.setMilliseconds(123);
console.log(data); */


/* const comUTC = new Date('2023-04-16T12:00:00.000Z');
const semUTC = new Date('2023-04-16T12:00:00.000');

const data = new Date('2023-04-16T12:00:00.000-05:00');

console.log(comUTC);
console.log(semUTC);
console.log(data); */

const data = new Date('2023-04-16T12:00:00.000-05:00');

const dataTimeFormat = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short', timeStyle: 'short'
});
const dataFormatada = dataTimeFormat.format(data);
console.log(dataFormatada);