// Comparação de strings

console.log('a'.localeCompare('c', 'pt-BR')); // -1
console.log('2'.localeCompare('10', undefined, {numeric: true})); // -1
console.log('a' > 'b'); // false