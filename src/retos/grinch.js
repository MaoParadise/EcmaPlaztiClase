carta = "peluche (bici [coche) bici coche balón"


function isValid(letter) {
    if(letter.includes('(' && ')')){
        let parentesis = letter.split('(')
        let starWith = false;
        parentesis.forEach(element => {
            if(element.startsWith(')')){
                starWith = true;
            };
        });

        if(letter.includes('{') ||
           letter.includes('}') ||
           letter.includes('[') ||
           letter.includes(']')){
            return false
           }else{
            if(starWith){
                return false
            }else{
                return true
            }
        }
    }else{
      return false
    }
    
   }

console.log(isValid(carta));