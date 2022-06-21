


//acessando objeto direto
const cliente = {
  nome:"Andre",
  idade:23,
  cpf: "213312324432",
  email: "andre@gmail.com"
}

console.log(cliente.nome)

//acessando objeto atraves da chave
const chaves = ["nome", "idade","cpf", "email"]
console.log(cliente[chaves[0]])


//acessando com for each
//info é uma vareavel que representa o indice, neste casso cada posicao da chave
chaves.forEach(info => console.log(cliente[info]))


