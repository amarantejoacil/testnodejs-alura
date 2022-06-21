

const usuario = {
  nome: "Joacil",
  idade: 28,
  carterinha: 11111,
  telefone: [123,456],
  dependentes:[{
    nome: "Vitoria",
    idade:25,
    carterinha: 2222
  }]
}

// console.log(usuario)
usuario.dependentes.push({
  nome:"Guilherme",
  idade: 1,
  carterinha: 333
})
// console.log(usuario)

const filtro_carterinha = usuario.dependentes.filter(dependente => dependente.carterinha===333)

//filtrando pela carterinha e trazendo somente o nome como retorno
console.log(filtro_carterinha[0].nome)


// filtrando por carterinha e trazendo todo o objetivo
// console.log(usuario.dependentes.filter(dependente => 
//   dependente.carterinha===333))


