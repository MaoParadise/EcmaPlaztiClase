function solution(digits) {
    let arrayDigits = digits;
    let stringDigits = '';
    let arrayConverted = [];

    for (let char = 0; char < arrayDigits.length; char++) {
        stringDigits += arrayDigits[char];
    }
    console.log(parseInt(stringDigits)+1);
    for( let i = 0; i < (parseInt(stringDigits)+1).toString().length; i++) {
        let number = (parseInt(stringDigits)+1).toString()[i];
        arrayConverted.push(parseInt(number));
    }
    return arrayConverted;
}


let digits = [9,9,9];

console.log(solution(digits));