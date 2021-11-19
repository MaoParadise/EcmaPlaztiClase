const string = 'Javascript es maravilloso, con Javascript puedo crear el futuro de la web';

const replacedString = string.replace('Javascript', 'Python');

console.log(replacedString);

const replacedString2 = string.replaceAll('Javascript', 'Python')


// Metodos privados

class Message {
    #show(val){
        console.log(val);
    }
}

const message = new Message();

message.show('Hola');


// Promise Any // es el que resuelve primero.

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));



// //  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

