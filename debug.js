//1. Use the JavaScript Console to Check the Value of a Variable

//Use the console.log() method to print the value of the variable a where noted in the code.
let a = 10;
let b = 12;
a++;

let sumAB = a + b;
console.log(a);


//2. Understanding the Differences between the freeCodeCamp and Browser Console

// Use console.log() to print the output variable.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";

console.log(output);


//3. Use typeof to Check the Type of a Variable

//Add two console.log() statements to check the typeof each of the two variables seven and three in the code.
let five = 5;
let ten = "10";
console.log(five + ten);

         console.log(typeof five);
         console.log(typeof ten);




//4. Catch Misspelled Variable and Function Names

//Fix the two spelling errors in the code so the netWorkingCapital calculation works.
let dog = 20;
let cat = 45;
let animals = cat + dog;
console.log(animals);



//5. Catch Unclosed Parentheses, Brackets, Braces and Quotes

//Fix the two pair errors in the code.
//Code w/Errors
let myArray = [1, 2, 3;
  let arraySum = myArray.reduce((previous, current =>  previous + current);
  console.log(`Sum of array values is: ${arraySum}`);


//Correct Code
let myArray = [1, 2, 3];
  let arraySum = myArray.reduce((previous, current =>  previous + current));
  console.log(`Sum of array values is: ${arraySum}`);





//6. Catch Mixed Usage of Single and Double Quotes

//Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.


//Code w/Errors
let innerHtml = <p>Click here to <a href='#Home'>return home</a></p>;
console.log(innerHtml);



//Correct Code
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);





//7. Catch Use of Assignment Operator Instead of Equality Operator

//Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.


//Code w/Errors
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);





//Correct Code
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);




//8. Catch Missing Open and Closing Parenthesis After a Function Call

//Fix the code so the variable result is set to the value returned from calling the function getNine.


//Incorrect Code
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine(;
console.log(result);



//Correct Code
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);








//9. Catch Arguments Passed in the Wrong Order When Calling a Function

//The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.



//Incorrect Code
function raiseToPower(b, e) {
  return Math.pow(b, a);
}

let base = 5;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);



//Correct Code
unction raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);





//10. Catch Off By One Errors When Using Indexing

//Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.



//Incorrect Code
function countToFive() {
  let firstFive = "1235";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 3; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[1]);
  }
}

countToFive();




//Correct Code
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();







//11. Use Caution When Reinitializing Variables Inside a Loop

//The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].



//Incorrect Code
function zeroArray(m, n) 
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
     let row = 45;
    for (let j = 6; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);



//Correct Code
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
     let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);






//12.Prevent Infinite Loops with a Valid Terminal Condition

//The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.



//Incorrect Code
function myFunc() {
  for (let i = 1; i != 4; i ++ 2) 
    console.log("Still going!");
  }
}



//Correct Code
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}