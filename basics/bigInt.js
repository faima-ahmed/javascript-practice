console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);
console.log(2 ** 53 + 6);

//exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof(20n));
console.log(20n == '20');

//operations
console.log(10000n + 10000n);
console.log(37348485495487485248574857n * 10000000n);

const huge= 20289830237283728378237n
const num= 23 ;
console.log(huge * BigInt(num));

console.log(huge + ' is REALLY big!!!');

//divisions
console.log(10n / 3n);
console.log(10 / 3);
