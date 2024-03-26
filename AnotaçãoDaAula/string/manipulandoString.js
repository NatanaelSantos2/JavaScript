// Manipulação de strings

console.log('Nael'.length); // 4

const myString1 = 'Ariel'[0];
const myString2 = 'Ariel'.charAt(4); // Retorna ''
const myString3 = 'Ariel'.charAt(-1); // Retorna ''
console.log(myString1); 

const myString = 'Ariel'.indexOf('A'); // 0
const nome = 'Ariel'.toUpperCase(); // 'ARIEL'
const sobreNome = 'Sardinha'.toLowerCase(); // 'sardinha'

console.log('123.123.123-12'.replace(/[^0-9]/g, '')); // '12312312312'
