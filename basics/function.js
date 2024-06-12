/*
function logger(){
    console.log('My name is Diya')
}

logger();
logger();
logger();

function fruitProcessor (apples, oranges){
    //console.log(apples, oranges);
    const juice= `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice= fruitProcessor(5, 0);
console.log(applejuice);

//console.log((fruitProcessor(5, 2)));

const appleOrangeJuice= fruitProcessor(5, 3);
console.log(appleOrangeJuice);

const num= Number('23');
*/

//function declaration
function calcAge1(birthYear){
    return 2037-birthYear;

}
const age1= calcAge1(2002);

//function expresssions
const calcAge2= function(birthYear){
    return 2037-birthYear;
}
const age2= calcAge2(2002);
//console.log(age1, age2);

//arrow function
const calcAge3= birthYear => 2037-2002
const age3= calcAge3(1991);
//console.log(age3);

//functions calling other functions



