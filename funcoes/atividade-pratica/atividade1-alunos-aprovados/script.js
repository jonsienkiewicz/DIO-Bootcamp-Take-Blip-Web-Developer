// outputs podem ser vistos via node

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 7,
		turma: '2C',
	},
];

function escola (alunos, media){
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        const {nota,nome} = alunos[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados;
}

console.log(escola(alunos,7));