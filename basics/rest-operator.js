//rest operator
function myfunc(a, ...parameters){
    console.log(a);
    console.log(parameters);
}

myfunc(4, 5, 6, 7, 8, 9);