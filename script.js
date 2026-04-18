
const firstName = "John Paul";   
let age = 19;               

age = 19; 



const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet("John"));

const message = `My name is ${firstName} and I am ${age} years old`;

console.log(message);


const user = {
    name: "John Paul",
    city: "Pangasinan"
};

const { name, city } = user;

console.log(name);
console.log(city);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

const multiply = (a, b = 2) => {
    return a * b;
};

console.log(multiply(5));   
console.log(multiply(5, 3)); 