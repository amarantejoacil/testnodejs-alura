



const cliente = {
  nome:"Joacil",
  idade:13,
  cpf:"2341342",
  email:"joacil.amarante@gmail.com"
}
console.log(cliente)
cliente.fone = 24243424242
console.log(cliente)



//acessando coleção de telefone dentro do objeto usuario
const usuario = {
  user: "joacil",
  telefone: [123,456]
}
console.log(usuario)
usuario.telefone.forEach(fone => console.log(fone))
