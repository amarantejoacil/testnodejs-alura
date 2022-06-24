

//JSON.stringify(): converte um objeto JavaScript para o formato JSON.
const jsonLivro = JSON.stringify({
  id:5,
  titulo:"Primeiro passos com node JS",
  autor:"Joacil",
  versoes:["ebook", "impresso"]
})

//JSON.parse(): converte JSON para um objeto JavaScript;
const objLivro = JSON.parse(jsonLivro)

console.log(jsonLivro)
console.log(objLivro)
