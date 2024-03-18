const data1 = new Date('2023-11-15');
const data2 = new Date('2023-12-15');
const diffTime = data2.getTime() - data1.getTime();
const diffDays = diffTime / (1000 * 60 * 60 * 24);
console.log(diffDays);
