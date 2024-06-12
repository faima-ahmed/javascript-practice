const friend1= 'Faima';
const friend2= 'Khalid';
const friend3= 'Faria';

// const friends=['Faima', 'Khalid', 'Faria'];
// console.log(friends);
// console.log(friends[0]);

// console.log(friends.length);

//array methods
//push methods
const friends=['Faima', 'Khalid', 'Faria'];
friends.push('Ammu');
console.log(friends);

friends.unshift('abbu');
console.log(friends);

const popped= friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Faria'));
console.log(friends.indexOf('Bob'));