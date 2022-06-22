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

