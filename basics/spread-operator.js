//spread operator

function addNumbers(x, y, z){
    return x + y + z
}

let numbers= [1,2,3];
//console.log(addNumbers(numbers[0], numbers[1], numbers[2]));
console.log(addNumbers(...numbers));

let numbers1= [5,6];
console.log(...numbers, ...numbers1);

//object spread
let p1={
    name:'Faima Ahmed',
    age: 22
}

let p2={
    nationality: 'Bangladesh',
    occupation: 'programmer'
}

let p={...p1, ...p2};
console.log(p);