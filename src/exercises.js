//commonEnd
function commonEnd(a, b) {
  if (!a || !b) {
    return false;
  }
  else if (a.length === 0 || b.length === 0) {
    return false;	  
  }
  else{
	  var firsta = a[0];
	  var firstb = b[0];
	  var lasta = a[a.length - 1];
	  var lastb = b[b.length - 1];
  
	  if(firsta == firstb || lasta == lastb){
		return true;
	  }
	  else{
		return false
	  }
	}
}

//endsMeet
function endsMeet(values, n) {
  if (!values || !Number.isInteger(n)) {
    return [];
  }
  else if (values.length < n || n < 0) {
    return [];
  }	  
  else{
  var newArray = [];
  for(var i = 0; i < n; i++){
    newArray.push(values[i]);
  }
  for(var i = values.length - n; i < values.length; i++){
    newArray.push(values[i]);
  }
  return newArray;
  }
}

//difference
function difference(numbers) {
//this function will pass the test for [1, 2, "", 4] also
  function checkNumber(number) {
    return typeof number != 'number';
  } 
  if (!numbers) {
    return undefined;
  }
  else if (numbers.some(checkNumber) || numbers.some(isNaN)) {
    //need both conditions, because typeof NaN === 'number'
    return undefined;
  }
  else if (numbers.length < 1) {
    return undefined;
  }
  else{
    var max = Number.MIN_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER;
    for(var i = 0; i < numbers.length; i++){
      if(numbers[i] > max){
        max = numbers[i];
      }
      if(numbers[i] < min){
        min = numbers[i]
      } 
    }
    return max - min;
  }  
}

//max
function max(number) {
  if (!number || number.length < 3 || number.some(isNaN) || number.length % 2 == 0) {
    return undefined;
  }
  else{
    var last = number[number.length - 1];
    var middle = number[(number.length - 1)/2];
    var first = number[0];
    if(last >= middle && last >= first) {
      return last;
    }
    else if(middle >= last && middle >= first) {
      return middle;
    }
    else if(first >= last && first >= middle) {
      return first;
    }
  }
}

//middle
function middle(values) {
  if(!values || values.length % 2 == 0 || values.length < 3){
    return [];
  }
  else{
  var middleValue = values[(values.length - 1)/2];
  var higherValue = values[(values.length - 1)/2 + 1];
  var lowerValue = values[(values.length - 1)/2 -1];
  var newArray = [lowerValue, middleValue, higherValue];
  return newArray;
  }
}

//increasing
function increasing(numbers) {
  if(!numbers || numbers.length < 3 || !numbers.every(number => Number.isInteger(+number))){
    return false;
  }
  for(var i = 0; i < numbers.length - 2; i++){
    if(numbers[i+2] > numbers[i+1] && numbers[i+1] > numbers[i]){
      return true;
    }
  }
	return false;
}

//everywhere
function everywhere(values, x) {
  if(!values || values.length < 1 || !x){
    return false;
  }
  var everywhere = true;
  for(var i = 0; i < values.length; i++){
	if(values[i-1] !== x && values[i] !== x && values[i+1] !== x){
      everywhere = false;
    }
  }
  return everywhere;
}

//consecutive
function consecutive(numbers) {
  if(!numbers || numbers.length < 3 || !numbers.every(number => Number.isInteger(+number))){
    return false;
  }
  var consecutive = false;
  for(var i = 0; i < numbers.length - 2; i++){
    if(numbers[i] % 2 == 0){
      if(numbers[i+1] % 2 == 0 && numbers[i+2] % 2 == 0){
        consecutive = true;
      }
    }
    else{
      if(numbers[i+1] % 2 == 1 && numbers[i+2] % 2 == 1){
        consecutive = true;
      }
    }
  }
    return consecutive;
}

//balance
function balance(numbers) {
  function sum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
      sum = sum + array[i];
    }
    return sum;
  }
  if(!numbers || numbers.length < 2 || !numbers.every(number => Number.isInteger(+number))){
    return false;
  }
  var firstsum = 0;
  var balance = false;
  for(var i = 0; i < numbers.length; i++){
    firstsum = firstsum + numbers[i];
	if(firstsum == sum(numbers.slice(i+1))){
       balance = true;
       }
       }
  return balance;
}

//clumps
function clumps(values) {
  if(!values){
    return -1;
  }
  var clumps = 0;
  var curr = undefined;
  for(var i = 0; i < values.length; i++){
    if(values[i] === values[i+1] && values[i] !== curr){
      curr = values[i];
      clumps = clumps + 1;
    }
    else{
      if (values[i] !== curr){
        curr = undefined;
      }
    }
  }
  return clumps;
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
*/

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
  
  
