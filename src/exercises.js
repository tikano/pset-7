function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
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

  // write your code here
}

function endsMeet(values, n) {
  if (!values || values.length < n || Number.isInteger(n) || n < 0) {
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

function difference(numbers) {
  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
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
    return max = min;
  }
    
}

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

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
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
