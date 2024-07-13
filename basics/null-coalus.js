'use strict';

//normal if-else
let myself = 'Faima';

if (myself !== undefined && myself !== null) {
  console.log(' variable is Defined');
} else {
  console.log('variable is Undefined');
}

//tarnery operator
let test;

test = myself !== undefined && myself !== null ? 'Hello' : 'Bye';
console.log(test);
