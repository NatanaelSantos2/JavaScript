const data = new Date('2023-10-01T12:00:05Z');
const dia = data.getDate();
const diaSemana = data.getDay();
const mes = data.getMonth();
const ano = data.getFullYear();
console.log('Dia do mês ', dia)
console.log('Dia da semana ', diaSemana);
console.log('Mes do ano ', mes);
console.log('Ano ', ano);

// const data = new Date('2023-04-16T05:12:10Z');
data.setFullYear(2022);
data.setMonth(0);
data.setDate(24);
data.setHours(20 - 3, 21, 10)
data.setMinutes(40);
data.setSeconds(15);
data.setMilliseconds(123);
console.log(data);
