const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey esta correcto');
        } else {
            reject('Whoooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response)) // se usa then para ejecutar una funcion cuando se resuelve la promesa
    .catch(error => console.log(error)); // se usa catch para ejecutar una funcion cuando se rechaza la promesa


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 3000);
        }else{
            const error = new Error('Whoooops!');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Termino'))
    .catch(err => console.log(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => { 
        console.log('Array of results : ', response)
    })
    .catch(err => {
        console.log(err)
    });

