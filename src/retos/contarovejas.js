const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]

// function contarOvejas(ovejas) {
//     let ovejasFiltradas = [];
  
//     ovejas.map(oveja => {
//       if(oveja.color === 'rojo'){
//         if((oveja.name).includes('n') && (oveja.name).includes('a')){
//           ovejasFiltradas.push(oveja)
//         }
//       }
//     })
  
//     return ovejasFiltradas;
//   }

function contarOvejas(ovejas) {
    return ovejas.filter(oveja => (oveja.color === 'rojo') && ((oveja.name.toLowerCase()).includes('n') && (oveja.name.toLowerCase()).includes('a')));
  }


const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)