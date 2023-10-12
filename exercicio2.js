/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
    que contém nome, nota1 e nota2. Use o for para percorer esse array
    e calcular a média das duas notas de cada aluno.
    Ao final, imprimir o nome do aluno e a sua média
*/

const gradeAvarage = () => {
    const listStudents = [
        { name: "João", grades: [8, 7] },
        { name: "Maria", grades: [9, 8] },
        { name: "Carlos", grades: [6, 5] },
        { name: "Ana", grades: [7, 6] },
        { name: "Pedro", grades: [10, 9] },
        { name: "Lúcia", grades: [8, 7] },
        { name: "Fernando", grades: [7, 6] },
        { name: "Camila", grades: [9, 8] },
        { name: "Rafael", grades: [6, 5] },
        { name: "Juliana", grades: [10, 9] },
    ];

    for (let i = 0; i < listStudents.length; i++) {
        const avarage = (listStudents[i].grades[0] + listStudents[i].grades[1]) / 2;

        console.log(`Student ${listStudents[i].name} had an avarage of ${avarage}.`)
    }
}

gradeAvarage();