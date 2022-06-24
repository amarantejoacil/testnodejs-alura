//teste incluindo dependentes e adicionando saldo 
const cliente = {
  nome: "Joao",
  idade: 18,
  dependente: [
    {
      nome:"Zezinho",
      idade:13
    },
    {
      nome:"ana",
      idade:"6 meses"
    }
  ],
  saldo: 100,
  depositar: function(valor){
    this.saldo += valor
  }
}
// console.log(cliente)
cliente.depositar(30)
// console.log(cliente)

let relatorio = "";
for (let c in cliente){
  // console.log(c) // retorna as chaves
  // console.log(cliente[c]) //retorna objetivo joao e seus dados

  if(typeof cliente[c]=== "object" || typeof cliente[c]==="function"){
    continue
  }else{
    relatorio += `
    ${c} ===> ${cliente[c]}
    `
  }
}

//console.log(typeof cliente.depositar) //retorn uma string function
// console.log(relatorio)