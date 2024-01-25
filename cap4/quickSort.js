const numeros = [62, 3, 22, 12, 1];

//funciona apenas para pivo no primeiro elemento do array

function quickSort(array) {
    if (array.length <= 1) {
        return array

    }
    let menores = [];
    let maiores = [];
    let pivo = array[0];

    for (let i = 1; i < array.length; i++) {
        {
            if (array[i] < pivo) {
                menores.push(array[i])
            } else {
                maiores.push(array[i])
            }
        }
    };

    return ([...quickSort(menores), pivo, ...quickSort(maiores)])

}


console.log(quickSort(numeros));