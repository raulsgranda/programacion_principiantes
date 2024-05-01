import { addTwoNumbers,
    divideTwoNumbers,
    substractTwoNumbers,
    timesTwoNumber } from "../helpers/math-helpers";

export function greet(name:string = 'Mundo') {
    
    console.log('Hola ' + name);

}



// let firstName= 'Pep';
// greet(firstName);

let num1:number=10;
let num2:number=20;

let total1:number = addTwoNumbers(num1,num2);
let total2:number = divideTwoNumbers(num1,num2);
let total3:number = substractTwoNumbers(num1,num2);
let total4:number = timesTwoNumber(num1,num2);




console.log('add: ',total1);

console.log('substract: ',total2);

console.log('Times ',total3);

console.log('Divide:',total4);