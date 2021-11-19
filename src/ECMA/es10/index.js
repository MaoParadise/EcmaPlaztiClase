let array = [1,2,3, [1,2,3, [1,2,3]]];

//array.flat() 

console.log(array.flat(2))// devolver una raiz con las raices aplanadas dependiendo del numero es que tan profundo

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2])); // lo recorre y lo multiplica por dos


let hellos = '   helle WOrld  ss    ';

console.log(hellos);

console.log(hellos.trimStart());

console.log(hellos.trimEnd());

try {
    
} catch {
    error;
}



let entries = [['name','oscar'], ['age',12]];

console.log(Object.fromEntries(entries));


let mySymbol = 'My Symbol';

let symbol = Symbol(mySymbol);

console.log(symbol.description);