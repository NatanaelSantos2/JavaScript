const data = new Date('2023-04-16T12:00:00.000-05:00');
const dataTimeFormat = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short', timeStyle: 'short'
});
const dataFormatada = dataTimeFormat.format(data);
console.log(dataFormatada);
