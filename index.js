// Add your functions here
function map (array, callbackFn){
  let newArry = [];
  for (var i = 0; i < array.length; i++) {
    newArry.push(callbackFn(array[i]))
  }
  return newArry;
}
