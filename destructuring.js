/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/
var color = carDetails.color;
var make = carDetails.make;
var model = carDetails.model;
var year = carDetails.year;
//Code Here



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
  var firstName = obj.firstName;
  var lastName = obj.lastName;
  var title = obj.title;
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/
function totalPopulation(obj){
  var utah=obj.utah;
  var california = obj.california;
  var texas = obj.texas;
  var arizona = obj.arizona;
  return utah +california+ texas+ arizona;
}
//Code Here



////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/
function ingredients(obj){
  var carb = obj.carb;
  var fat = obj.fat;
  var protein = obj.protein;
  var arr=[];
  arr.push(carb,fat,protein);
  return arr
}
//Code Here



////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/
function largeNumbers( {first, second, third } ){
  return Math.min(first,second,third);
}
//Code Here



////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/
function numberGroups({obj}){
  var a=[];
  var b=[];
  var c =[];
a.push.length(obj.a);
b.push.length(obj.b);
c.push.length(obj.c)
return Math.max(a,b,c)

  
}
//Code Here


