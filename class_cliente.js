


class Cliente{
  constructor(nome,email,cpf,saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }

  depositar(valor){
    this.saldo += valor
  }

  exibirSaldo(){
    console.log(this.saldo)
  }
}

const andre = new Cliente("andre", "andre@gmail.com",123123123-33, 100)

andre.exibirSaldo()