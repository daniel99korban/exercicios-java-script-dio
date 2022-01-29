const alunos = [
    {
        nome: "Maisa",
        nota: 8
    },
    {
        nome: "Maik",
        nota: 5
    },
    {
        nome: "Luana",
        nota: 7
    },{
        nome: "Maria",
        nota: 10
    },{
        nome: "Artur",
        nota: 4
    }
];

function alunosAprovados(arr, media){
    let aprovados= [];
    for (let i = 0; i < arr.length; i++) {
        const {nome, nota} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 7));