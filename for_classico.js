

const numeros = [100, 200, 300, 400, 500];

for(let i = 0; i < numeros.length; i++){
  console.log(i, numeros[i])
}

// exemplo media
let nota = [5,2,7,9];
let soma_notas = 0;
for(let i = 0; i < nota.length; i++){
  soma_notas += nota[i];
}

console.log(soma_notas/nota.length);