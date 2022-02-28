name = 'Nicholas';
var name;
console.log(name); // Should log: Nicholas

setName(); // Calls setName() b/f it is declared!
function setName() {
    var name = 'Covalence';
    console.log(name); // Should log: Covalence
}

console.log(`Before findAverage() is called.`); // Should log: Before findAverage() is called.
let myAverage = findAverage(80, 88); 
console.log(`After findaverage() was called. myAverage() is ${myAverage}!`); // Should log: After findAverage() was called. myAverage() is 84!
function findAverage(number1, number2) {
    console.log(`Inside of findAverage().`); // Should log: Inside of findAverage().
    var answer = (number1 + number2) / 2;
    return answer;
}

let fruits = [`Blueberries`, `Avocado`, `Watermelon`];
let favoriteFruit;
let leastFavoriteFruit; 

function printFruit(index) {
    console.log(`Print my first fruit: ${fruits[index]}`); 
    let favoriteFruit = fruits[1];
    let leastFavoriteFruit = fruits[2]; 

    function printMyFavoriteFruit() {
        console.log(`Print my favorite fruit: ${favoriteFruit}`); 
    }
    printMyFavoriteFruit();
}

console.log(`Print my least-favorite fruit: ${leastFavoriteFruit}`); 
printFruit(0);

myName();
function myName() {
    console.log(`My name is: ${name}`);
}

let alertThisMessage = function(message) {
    alert(message);
}
alertThisMessage(`Hello`); // Should alert: Hello

console.log(`End of script.`); // Should log: End of script.