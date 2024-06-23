//object
const  faima={
    firstName:'Faima',
    lastName:'Diya',
    age: 2037-2002,
    job: 'freelancer',
    friends: ['Dipa', 'Mina', 'Tisha']
};

console.log(faima);

//dot
console.log(faima.firstName);

//bracket nation
console.log(faima['lastName']);

const nameKey= 'Name';
console.log(faima['first' + nameKey]);
console.log(faima['last' + nameKey]);

const demo= prompt('What do you want to know about faima? Choose between firstName, lastName, age, job and friends');
if(faima[demo]){
    console.log(faima[demo]);
}
else{
    console.log('Wrong request!')
}

faima.location='Bangladesh';
faima['twitter']= '@faimadiya';
console.log(faima);
