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
  // write your code here
}

function max(number) {
  // write your code here
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
