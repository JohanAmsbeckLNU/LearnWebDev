//comment..
console.log('Hello again!!');
//variable
let firstName, lastName;
let name = 'John';
lastName = 'Doe';
console.log(name);
console.log(lastName);

//constants - variables that can not be changed 
const firstYear = 2020;
console.log(firstYear);

//Primitive / Value typers
//String
let aNewName = 'Sven'; //String Literal
let age = 30; // Number Literal
let isEmpty = true; // boolean Literal
let someUndefinedVariable; //
let someOtherUndefinedVariable = undefined;
let selectedValue = null; // use null when we want to clear any value in a variable

console.log(typeof name);  // use typeof to get variable 

//Reference types (Object, Array, Functions)
// Object is a boundle of variables
// eg. a Person object

let person = {

    // key value pair
    name : "Lars",
    age :  40
};

//Dot notation to reach key value pairs
person.name = "Nisse";
console.log(person.name);

// Bracket notation
//person["name"] = "Lisa";
//or if dynamic do like this:
let selection = 'name';
person[selection] = "Lisa";
console.log(person.name);


// Values Types (Primitives) & Reference Types
//    * Number                  * Objects
//    * String                  * Functions
//    * Boolean                 * Array
//    * Symbol
//    * undefined
//    * null
//
// Pritives are copied by values
// Reference types are copied byr referece (address)



//ARRAYS
//let selectedColors = []; //intital empty Array
let selectedColors = ["red", "blue"];  
selectedColors[2] = 59;
console.log(selectedColors[1]); //to get a specific position in array
console.log(selectedColors); 
console.log(selectedColors.length); 

//Functions
function greet(name, lastName){
    console.log("Yo " + name + " " +lastName + "!!");
}

function greet(name){
     console.log("Yo " + name + " " +lastName + "!!");
}

greet("Sture", lastName); //to call the function
greet("Mary"); //to call the function

function square(number){
    return number * number;
}

let numb = square(2);
console.log(numb);

//Operators
//Arithmetic 
let x = 10;
let y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);     //remeinder of devision
// console.log(x ** y); //x to the power of y (exponetitation)

console.log(++x); //increment before used
console.log(x--); //decrement after used

//Assignment operators e.g. =
x *= 3; // same as x = x * 5; 

//Comparison 
//Releational operators > greater than <= less or equal to 
// Strict Equality operator === (both type and type is the same) '1' === 1 gives false
x = 10;
console.log(x===10); //same as equal to
console.log(x!==55); //same as NOT equal to
//Lose Equalty opertor == ()
console.log('1' == 1);  //gives true even if it's different types
console.log(true == 1);  //gives true even if it's different types
console.log(true == 0);  //gives false as 0 are the value for false


//Ternary Operators (conditional operator)
let points = 90;
let type = points > 100 ? 'gold' : 'silver'; //if true we set the type to 'gold' and if false we set it to silver
console.log(type);


//Logical operators (AND -> &&) (OR -> ||)  (NOT -> !)
//Non-Booleans
false || true       // gives true due to last boolean
false || 'Mosh';    // gives Mosh as this is a string
false || 1;         // gives 1 as it's truthy
false || 1 || 2;    // gives 1 as it stoppes at the first Truthy so 2 is ignored

// Falsy (not just False)
// undefined, null, 0, false, "", NaN (Not a number)
// All that is not Falsy is Truthy


let userColor = 'red'; //if this is undefined the color will be blue
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);


//Bitwise operators
// 1 = 00000001 8bits = 1 byte
// 2 = 00000010
// R = 00000011 for | => 3
// R = 00000000 for & => 0

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100 Just read
// 00000110 Just read and write
// 00000111 Read and write and Execute
const readPermission = 4;
const writePermission = 2;
const executePerission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission; //add read & write permission with |
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no'; // if read permission true then return yes
console.log(message);

//Operator Precedence
let numbX = 2 + 3 * 4; //* precedence + so use (to control which goes first)


// https://nordea.udemy.com/course/javascript-basics-for-beginners/learn/lecture/10688680#overview











