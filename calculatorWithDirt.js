
let userName = undefined
userName = Rhone
console.log(userName + "'s calculator")


// function declaration
const add = (numOne, numTwo) => {
    return numOne + numTwo;
  }
  // function invocation/call
  add(1, 2);
  add(5, 1273547829);
  
  
  const subtract = (numOne, numTwo) => {
      return numOne - numTwo
  }
  //function call subtraction test
    subtract(5,2);
  
  
  const divide = (numOne, numTwo) => {
    return numOne / numTwo;
  }
  // function call division test
  divide(2,4);
  
  
  const multiply = (numOne, numTwo) => {
    return numOne * numTwo
  }
  //function call multiplication test
  multiply(6,6);
  
  
  // !!!Why doesn't this work??!
  var array = [add(1,2), divide(2,4), subtract(5,2), multiply(6,6)] 
 console.log(array[0], array[1], array[2], array[3])
  
  
  //console.log ([0], [1], [2], [3])
  
  
  //Only the multiplication aka the last written function shows a result when pressing "run". Why is this?
  
  //console.log (add, subtract, divide, multiply) 
  //console.log (return)
  
  
  
  changes 
