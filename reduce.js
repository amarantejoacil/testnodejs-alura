

//reduce, sempre precisa de dois parametro
// um valor acumulado e o atual
//funcionamento: ele retorna toda a lista em um valor somente

const salaJS = [5,4,10,8,4]
const salaJava = [8,6,3,6,2]
const salaPython = [4,2,1,3,2]

function mediaSala(notaSala){
  const somaDasNotas = notaSala.reduce((acum, atual) =>
  atual + acum,0)
  return somaDasNotas/notaSala.length
}

console.log(`media da sala JS ${mediaSala(salaJS)}`)
console.log(`media da sala JAVA ${mediaSala(salaJava)}`)
console.log(`media da sala Python ${mediaSala(salaPython)}`)



const notas = [3,2,4,10]
const media = notas.reduce((acum,atual) => atual+acum,0) / notas.length
console.log(`média nota: ${media}`)