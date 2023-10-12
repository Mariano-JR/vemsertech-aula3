/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

const lotery = () => {
    const result = [];

    for (let i = 1; i <= 6; i++) {
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        !result.includes(randomNumber) ? result.push(randomNumber) : i--;
    }

    result.sort((a, b) => a - b)
    console.log(`The lottery results for this month's are the numbers: ${result}`)
}

lotery();