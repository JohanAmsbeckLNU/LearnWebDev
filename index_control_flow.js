//Control flow

// if and if else and else
let hour = 10;

if(hour >= 6 && hour < 12)
    console.log("Good morning silly pants!");
else if(hour >= 12 && hour < 18)
    console.log("Good afternoon silly pants 2!");
else
console.log("Good evening silly pants 3!");

// switch & case
let role = 'moderator';

switch(role){
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('moderator');
        break;
    default:
        console.log('Unkown user');     
}

//// For loop
for(let i = 0; i<3; i++){
    console.log('for ', i);
}

//while loop
let i = 0;
while(i<3){
    console.log('while: ',i);
    i++;
}

//do while loop
let j  = 0;
do{
    console.log('do while: ', j);
    j++;
}while(j<3);

//For..in loop (used to iterate over an object)
const person = {
    name: 'John',
    age: 30
};
//for(let key in person)
for(key in person)
    console.log('Key: '+key +' : ' + person[key]);

const colors = ['red', 'green', 'blue'];
for(index in colors)
    console.log(index, colors[index]);


//for-of loop (used to iterate over actual item in array)
for(let color of colors)
    console.log(color);


const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// easiest way to enumerate the properties of an object
for(let key in circle){
    console.log(key, circle[key]);
}


// Object.keys returns a Array of circle key which we can iterate over
for (let key of Object.keys(circle))
    console.log(key);

// returns each property as a key value pair as an array
for (let entry of Object.entries(circle))
    console.log(entry);

// to see if an given property exist in an object we can do:
if('radius' in circle) console.log('yes');



// Break => make us jump out of a loop
// Continue => Jumps out of current loop iteration and start next


function maximum(num1, num2){
    if(num1 > num2) return num1;
    return num2;

    //the same as above return (num1 < num2) ? num1 : num2;
}

console.log(maximum(8,9));

function isLandscape(width, height){
    return (width > height);
    //same as return (width > height) ? true : false;
}

console.log('isLandScape: '+isLandscape(200,400));


