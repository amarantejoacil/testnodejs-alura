

const usuario = {
  nome: "Joacil",
  idade: 28,
  carterinha: 11111,
  telefone: [123,456]
}
//incluindo dependente
usuario.dependente = {
  nome: "Vitoria",
  idade:25,
  carterinha: 2222
}

// console.log(usuario)

//acessando dependente de usuario
console.log(usuario.dependente.nome)