const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}


function contains(store, product) {
    let storeArray = [];
    let storeString = '';

    for (let char = 0; char < JSON.stringify(store).length; char++) {
        if (JSON.stringify(store).charAt(char) !== '{' &&
            JSON.stringify(store).charAt(char) !== '}' &&
            JSON.stringify(store).charAt(char) !== '"'
        ) {
            storeString += JSON.stringify(store).charAt(char).replace(',', ':');
        }
    }
    storeArray = storeString.split(':');

    return storeArray.some(item => item === product);
}

console.log(contains(otroAlmacen, 'cd-rom'))