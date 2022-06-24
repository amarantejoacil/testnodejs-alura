const cliente = [
{
  nome: "Joao",
  idade: 18,
  dependentes: [
    {
      nome:"Zezinho",
      idade:13
    },
    {
      nome:"ana",
      idade:"6 meses"
    }
  ],
},
{
    nome: "Maria",
    idade: 20,
    dependentes: [
      {
        nome:"natalia",
        idade:5
      }
    ],
  },
]

// console.table(cliente)
const lista_dependentes = [...cliente[0].dependentes, cliente[1].dependentes]

// const lista_dependentesdois = [cliente[0].dependentes, cliente[1].dependentes]
console.log(lista_dependentes)
// console.log(lista_dependentesdois)