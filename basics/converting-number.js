console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1+0.2 === 0.3);

//conversion
console.log(Number('23'));
console.log(+"23");

//parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

//check if value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));
