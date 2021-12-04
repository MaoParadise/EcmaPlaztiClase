const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    let toys = letter;
    // el split separa el string en un array para luego poder recorrerlo y filtrar por los que contengan _
    let giftList = (toys.trim().split(' ')).filter(present => !present.includes('_'));
    
    giftList = giftList.map(present => present.trim());
    
    let result = {};


    // recorro los elementos de giftList y los guardo en un objeto
    for (let present of  giftList ){
        result[present.trim()] = giftList.filter(element => element === present).length; // obtengo el número de veces que aparece el elemento en el array
    }

    return result;

}

const regalos = listGifts(carta)

console.log(regalos)
