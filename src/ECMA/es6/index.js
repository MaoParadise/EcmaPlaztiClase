function  newFunction( name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'CL'
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'Oscar', age = '32', country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 18 , 'CO');

//  before ec6

let Hello = 'hello';
let World = 'World';
let epicPhrase = Hello + ' ' + World;
console.log(epicPhrase);

// Templates Literal  en EC6+
let epicPhrase2 = `${Hello} ${World}`;
console.log(epicPhrase2);


// b -- ec6
let lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quae delectus suscipit nulla quo quidem facilis a eveniet, incidunt eaque totam ipsum consectetur adipisci sed vero! Repellendus neque tempore dolore"
+ "frase epic";
console.log(lorem);


let lorem2 = `otra frase epica
ahora si que si `;

console.log(lorem2);


// destruccturacion de elementos 

let person = {
    'name' : 'oscaar',
    'age' : 32,
    'country' : 'CL'
}

console.log(person.name, person.age, person.country);


let { name, age, country } = person;
console.log( name, age, country)



// operador de propagacion 

let team1 = ['Oscar', 'Julian', 'Ricardo'];

let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David',  ...team1, ...team2];

console.log(education);


/* var es el antiguo, con let solo esta disponible en el bloque de codigo */ 

{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}


console.log(globalVar);


const a = 'b';


// ARROW FUNCTIONS , PROMISES AND PARAMETERS

let nombre = 'Carlos';
let age = 29

obj = {
    nombre: nombre,
    age : age
}

// es6
obj2 = {
    nombre,
    age
}

console.log(obj, obj2);


 // -----   Arrow Funtions   -----

 const names = [
    { nombre : 'Carlos', age : '29' },
    { nombre : 'Jessica', age : '27' }
 ]

 let listOfNames = names.map(function(item){
     console.log(item.nombre);
 })

 // es6
 let listOfNames2 = names.map( (item) => console.log(item.nombre));

 const listOfnames3 = (nombre, age) => {
     //...
 }

const listOfName4 = nombre => {
    //:..
}

const square = num => num * num;



// PROMISES !!! 


const helloPromise = () => {
    return new Promise((resolve, reject ) => {
        if(true){
            resolve('Hey todo bien :D ');
        } else {
            reject('ups algo salio mal ./ ');
        }
    });
}

helloPromise()
    .then( response => console.log(response))
    .then( () => console.log('Hola'))
    .catch(error => console.log(error));



// CLASES EN ES6

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;       
        return this.valueA + this.valueB;
    }




}
 
const calc = new calculator();

console.log(calc.sum(5,8));

// IMPORTs

import { hello } from "./modelu";

hello();

function* helloWorld(){
    if(true){
        yield 'Hellow';
    }
    if (true){
        yield 'World';
    }
};


const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


