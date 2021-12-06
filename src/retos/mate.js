

function sumPairs(numbers, result) {
    arrayResult = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === result && i !== j){
                return [numbers[i], numbers[j]];
            }
        }
    }
    return null
   
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) 