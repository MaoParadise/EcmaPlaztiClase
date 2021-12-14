function groupBy(collection, it) {
    let result = new Object();
    let typeIt = '';
    (typeof it == 'function')? typeIt = 'function' : typeIt = 'property';

    collection.map(item => {
        let key;
        (typeIt == 'function')? key = it(item) : key = item[it];
        result[key] = result[key] || [];
    });
    
    for(let key in result) { 
        collection.forEach(item => {
            if(typeIt == 'function') {
                if(it(item) == key) {
                    result[key].push(item);
                }
            }else{
                if(item[it] == key) {
                    result[key].push(item);
                }
            }
        })
    }


    return result;
  }


groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy([1397639141184, 1363223700000],timestamp => new Date(timestamp).getFullYear())
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')