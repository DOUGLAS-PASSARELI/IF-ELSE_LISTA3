//2) Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos".

alert("Verificação se os Números são Multiplos")

var numA = parseInt(prompt("Digite o Primeiro Número: "));

var numB = parseInt(prompt("Digite o Segundo Número: "));


var resultado = numA % numB;

if(resultado == 0){
    alert("Os Números são MÚLTIPLOS");
}

else{
    alert("Os Números NÃO são MÚLTIPLOS");
}

console.log(resultado);


//// OUUU

alert("Verificação se os Números são Multiplos")

var numA = parseInt(prompt("Digite o Primeiro Número: "));

var numB = parseInt(prompt("Digite o Segundo Número: "));


if(numA % numB == 0){
    alert("Os Números são MÚLTIPLOS");
}

else{
    alert("Os Números NÃO são MÚLTIPLOS");
}

console.log(resultado);