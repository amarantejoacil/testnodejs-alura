


class Cliente{
  constructor(nome,idade,saldo){
    this.nome = nome
    this.idade = idade
    this.saldo =saldo
  }

  depositar(valor){
    this.saldo += valor
  }

  exibirSaldo(){
    console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente{
  constructor(nome,idade,saldo,saldoPoupanca){
    super(nome,idade,saldo) //escrevo oq quero herdar
    this.saldoPoupanca = saldoPoupanca
  }
  depositarPoupanca(valorPoupanca){
    this.saldoPoupanca += valorPoupanca
  }
}

const andre = new ClientePoupanca("nome",18,100,200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)
console.log(andre)
