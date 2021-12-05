function daysToXmas(date) {
    const dateFor = date;
    const xmasDay = new Date('Dec 25, 2021');
    return Math.ceil((xmasDay - dateFor )/(1000*60*60*24)) // devuelve el entero mas proximo;
 }


const date = new Date('Dec 23, 2021')
console.log(daysToXmas(date))