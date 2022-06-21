


const notas = [10,2,3,6,8]


                                    //funcao, if ternario
const notas_atualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
console.log(notas_atualizadas)