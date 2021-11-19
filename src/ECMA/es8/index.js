const data = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length)

//----------------------


const data = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design: 'Ana',
}

const values = Object.values(data); // Davuelve un Array de String simple ignorando las asignaciones de los objetos

console.log(values);
console.log(values.length)



// ----- anteponer elementos

const string = 'Hello';
console.log(string.padStart(7, 'HOLA'))
console.log(string.padEnd(12, '---HOLA'))
console.log('food'.padEnd(12, '   -----'))


const obj = {
    nombre : 'Oscar',
}


// ASYNC AWAIT

const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello Wolrd'), 3000)
            : reject(new Error('Test Error'))
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();