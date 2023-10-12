/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

const pairsOdd = (arr) => {
    const pairs = [];
    const odd = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? pairs.push(arr[i]) : odd.push(arr[i]);
    }

    console.log(`
        Pairs numbers: --- ${pairs}
        Odd numbers: ----- ${odd}
    `);
}

pairsOdd([1,2,3,4,5,6,7,8,9]);