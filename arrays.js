//DATA STRUCTURES: ARRAYS//

/////////////////////////////////////////////////////////////////////

const myArray = [];                 //shorthand version
const anotherArray = new Array();

const tenArray = new Array (10);   //specifies the size to be 10

//method for filling an array with values
let anArray = new Array(5);
let val = 1;
for (const [index, element] of anArray.entries()) {
  anArray[index] = val++;
}

console.log(anArray);

//reference elements in an array
console.log(anArray[3]);
console.log(anArray[1+3]);

//////////////////////////////////////////////////////////////////

//ARRAY METHODS//

let a = [0, 1, 2];

let len = a.length;   //returns the length of the array
console.log('length:', len);

a.push(8);            //adds elements to the end of array
console.log('push()', a);

a.splice(3, 0, 'cha cha cha');    //adds an element to index:3 
console.log('splice()', a);

a.pop();              //removes an item from the end of the array
console.log('pop()', a);

a.shift();            //removes an item from the beginning of the array
console.log('shift()', a); 
