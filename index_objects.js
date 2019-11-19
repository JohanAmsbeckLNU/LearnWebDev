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
const Circle4 = new Function('radius',}][{¥€$£@¡¶!"#¤%&/()=?ÄÄåæø>||'"}]
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
}
´);

