const nomes = ['Jaco', 'Emergarda', 'Severino', 'Anastácia', 'Escrudêncio']

function contaItemsArray(array){
    if (array.length == 0) return 0;
    return 1 + contaItemsArray(array.slice(1));
    
}

console.log(contaItemsArray(nomes));