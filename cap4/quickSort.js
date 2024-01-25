const numeros = [62, 3, 22, 12, 1];

function quickSort(array){
    if (array.length < 2){
        return array
    }else{
        particionamento(array)
    }
}

function particionamento(array){
    let maiores = [];
    let menores = [];
    let pivo = Math.floor(array.length / 2);
    
    for (let i= 0; i < array.length; i++){
        console.log(array[i], array[pivo]);
        array[i] > array[pivo] ? maiores.push(array[i]) : menores.push(array[i]);
    }
    console.log('menores', menores, 'maiores', maiores);
}

particionamento(numeros)