


const fichaGuerreiro = {
  nome: "Aragorn",
  class: "Guerreiro",
}

const equipoGuerreiro = {
  espada:"Anduril",
  capa:"capa elfia +2"
}

const guerreiro = {fichaGuerreiro, equipoGuerreiro}
const guerreiro2 = {...fichaGuerreiro, ...equipoGuerreiro}
console.log(guerreiro)
console.log(guerreiro2)
