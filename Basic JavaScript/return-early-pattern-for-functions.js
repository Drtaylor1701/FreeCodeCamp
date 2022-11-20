/*
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.
*/

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0){
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);