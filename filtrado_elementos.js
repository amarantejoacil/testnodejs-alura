



const nomes = ['Joao', 'Maria', 'Ze']
const notas = [3,4,7]

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)

console.log(reprovados)