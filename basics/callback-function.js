const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirsWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join('');
};

//Higher-other function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformd by: ${fn(str)}`);
};

transformer('Javascript is the best', upperFirsWord);
transformer('Javascript is the best', oneWord);

//function return another function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Faima');
greeterHey('Khalid');

greet('Hello')('Diya');
