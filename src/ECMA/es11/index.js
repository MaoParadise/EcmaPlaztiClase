const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const module = await import('./file.js');
    module.hello();
} )


const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


// corre todas las promesas sin importar si una es rechazada en vez de promise.All
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => reject('resolve'));
const promise3 = new Promise((resolve, reject) => reject('reject 3'));

Promise.allSettled([promise1,promise2,promise3])
    .then( response => console.log(response));


// Global this
console.log(window);
console.log(globalThis);


// por defecto si es nulo
const fooo = null ?? 'default string';
console.log(fooo);


// optional chaining

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email')
}else{
    console.log('fail')
}
