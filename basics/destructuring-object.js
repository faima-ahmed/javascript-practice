'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    order: function (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
  
  };

  const {name, openingHours, categories}= restaurant;
  console.log(name, openingHours, categories);

  //swap variable
  let a=10, b=20;
  [a,b] = [b,a]
  console.log(a,b);

  //destructuring object

  const myself={
    firstName: 'Faima',
    lastName: 'Diya',
    gpa: 5.00,

    languages: {
        native:'bangla',
        beginner:'english'
    }
  }
   

//   console.log(myself.firstName);
//   console.log(myself.lastName);
//   console.log(myself.gpa);

const {firstName, lastName, gpa, languages}= myself;
console.log(firstName, lastName,  gpa);


// nested destructuring object
console.log(languages.beginner);

//destructuring function papameters

const studentInfo= ({id, fullName})=>{
    console.log(`${id}, ${fullName}`)
}

const student={
    id:101,
    fullName:'Faima Ahmed'
}

studentInfo(student)

