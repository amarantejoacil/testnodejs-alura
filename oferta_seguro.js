


const carro = {
  modelo:"etios",
  motor:1.5,
  possui_seguro:false
}

// for(let c in carro){
//   if(c == "possui_seguro" && carro.possui_seguro == false){
//     console.log("Faça seu seguro conosco!")
//   }else{
//     continue
//   }
// }


// const propsCarro = Object.keys(carro) //funcao retorna lista de chave

function oferecerSeguro(obj){
  const propsCarro = Object.keys(carro) 
  if(propsCarro.includes("possui_seguro")){
    console.log("verificação ok")
  }
}

// console.log(Object.values(carro)) //retorna objeto
console.log(Object.entries(carro)) //retorna chave e valor, indica 0 e 1
 oferecerSeguro(carro)


// console.log(carro)