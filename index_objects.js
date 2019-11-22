//OBJECTS

// const circle = {

//     radius: 1,
//     location: {
//         x:1,
//         y:1,        
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();

// Factory function (use Camel Notation - oneTwoThreeFour)
function createCircle(radius){
  return {
    // radius: radius,
    radius,
    draw(){
        console.log('draw');
    }
    // draw: function(){
    //     console.log('draw');
    // }
  };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);


//Constructor function (use Pascal Notation - OneTwoThreeFour)
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);

//Dynamix Nature of Objects
//add additional properties to an existing object
circle1.color = 'yellow';
console.log(circle1);

//delete properties of an object
// delete circle1.draw;
// delete circle1.color;
// console.log(circle1);


//Constructor (all objects has a construtor)
// let x = {}; -> let x = new Object();
// new String(); // '',"",´´
// new Boolean(); // true, false
// new Number(); // 1,2,3,...

//Functions are Objects
const Circle4 = new Function('radius',`
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
`);

//Cloning an object (the old way)
const another = {};

for(let key in circle){
  another[key] = circle[key];
}
console.log(another);

//Cloning an object (the better way)
const another2 = Object.assign({}, circle);
console.log(another2);

//Cloning an object (the better way + additional vars)
const another3 = Object.assign({
  color: 'yellow'
}, circle);
console.log(another3);

//Cloning an object with bread operator ... which takes all variables and methods of an object
const another4 = { ...circle};
console.log(another4);


// Math object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math.random());
console.log(Math.round(1.9));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));


// String primitice
const message = 'hi';
console.log(typeof message);

// String object
const anotherString = new String('hi');
console.log(typeof anotherString);

//test
// test VC again agin