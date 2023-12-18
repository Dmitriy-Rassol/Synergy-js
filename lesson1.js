let homework = "Домашняя работа";
console.log(homework); // Домашняя работа

let myName = "Дмитрий"; //Дмитрий
let age = 31; //31
let familyStatus = false; // false

console.log(`Имя: ${myName}`); // Имя: Дмитрий
console.log(`Возраст: ${age}`); // Возраст: 31
console.log(`Есть супруга: ${familyStatus}`); //Есть супруга: false


// примеры typeof
console.log(typeof 42); // "number"
console.log(typeof 'blubber'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undeclaredVariable);// "undefined"


const typeofVariable = () => {
console.log(`${myName}: тип ${ typeof myName}`);
console.log(`${age}: тип ${ typeof age}`);
console.log(`${familyStatus}: тип ${ typeof familyStatus}`);
};

typeofVariable(); 
// Дмитрий: тип string
// 31: тип number
// false: тип boolean

