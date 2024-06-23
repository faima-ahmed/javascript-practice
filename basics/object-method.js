const  faima={
    firstName:'Faima',
    lastName:'Diya',
    birthYear: 2002,
    job: 'freelancer',
    friends: ['Dipa', 'Mina', 'Tisha'],
    hasDriversLicense: true,

    calcAge: function (){
        //console.log(this);
      this.age= 2037-this.birthYear;
      return this.age;
    }
};

console.log(faima.calcAge());
console.log(faima['calcAge']());
console.log(faima.age);