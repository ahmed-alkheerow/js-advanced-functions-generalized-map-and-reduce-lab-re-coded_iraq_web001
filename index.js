// Add your functions here
function map (array, callbackFn){
  let newArry = [];
  for (var i = 0; i < array.length; i++) {
    newArry.push(callbackFn(array[i]))
  }
  return newArry;
}

function reduce(array , callbackFn  , startingPoint=0){
  let acc=0;
  for (var i = startingPoint; i < array.length; i++) {
  callbackFn(acc,  array[i])
  }
return acc;
}
