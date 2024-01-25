const numeros = [];

function somaItemsArray(array){
    let resultado = 0;
    if(array.length >= 1){
        resultado = array[0] + somaItemsArray(array.slice(1));
    }
    return resultado;
}

console.log(somaItemsArray(numeros));