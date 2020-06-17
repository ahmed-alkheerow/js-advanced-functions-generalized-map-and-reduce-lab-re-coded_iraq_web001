// Add your functions here
function map (array, callbackFn){
  let newArry = [];
  for (var i = 0; i < array.length; i++) {
    newArry.push(callbackFn(array[i]))
  }
  return newArry;
}

function reduce(array , callbackFn  , startingPoint=0){
  let acc=startingPoint;
  for (let i = 0; i < array.length; i++) {
  acc = callbackFn(acc,  array[i]);
  }
return acc;
}
