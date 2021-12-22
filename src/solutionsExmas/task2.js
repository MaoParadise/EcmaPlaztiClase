function solution(a, b) {

    let firstString = a; //split("").reverse().join("")
    let secondString = b;

    let maxLength = (firstString.length > secondString.length) ? firstString.length : secondString.length;
    let result = '';


    let maxLengthA = firstString.length;
    let maxLengthB = secondString.length;
    console.log(maxLengthA);
    for(let i = maxLength; i > 0; i--) {
        // if(firstString[i] && secondString[i]) {
        //     console.log(firstString[i] + ' y ' + secondString[i]);
        //     result += (parseInt(firstString[i]) + parseInt(secondString[i])).toString();
        // }
        // if(!firstString[i] && secondString[i]) {
        //     console.log('solo' + secondString[i]);
        //     result += secondString[i];
        // }
        // if(firstString[i] && !secondString[i]) {
        //     console.log('solo' + firstString[i]);
        //     result += firstString[i];
        // }

        if(maxLengthA === maxLengthB) {
            //console.log(firstString[i] + ' y ' + secondString[i]);
        }else{
            if(firstString[maxLengthA] && secondString[maxLengthB]){
                console.log(firstString[maxLengthA] + ' y ' + secondString[maxLengthB]);
            }
            if(!firstString[maxLengthA] && secondString[maxLengthB]){
                console.log('solo' + secondString[maxLengthB]);
            }
            if(firstString[maxLengthA] && !secondString[maxLengthB]){
                console.log('solo' + firstString[maxLengthA]);
            }
            maxLengthA--;
            maxLengthB--;
        }
        
    }

    return result;
}


console.log(solution("11", "9"))