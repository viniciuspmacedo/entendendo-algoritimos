const numeros = [62, 322, 12, 1];

function encontraMaior(array){

    if(array.length == 0) return 0;
    return array[0] > encontraMaior(array.slice(1)) ? array[0] : encontraMaior(array.slice(1));
    
}

console.log(encontraMaior(numeros));