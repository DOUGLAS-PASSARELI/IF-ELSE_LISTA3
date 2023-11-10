//1) Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.

var ano = parseInt(prompt("Digite o Ano: "));

var verificaAnoBissexto = ano % 4;

if(verificaAnoBissexto == 0){
    alert("O Ano é Bissexto");
}

else{
    alert ("O ano não é Bissexto");
}


console.log(verificaAnoBissexto);



/// ouu

var ano = parseInt(prompt("Digite o Ano: "));

var verificaAnoBissexto = ano % 4 == 0;

if(verificaAnoBissexto){
    alert("O Ano é Bissexto");
}

else{
    alert ("O ano não é Bissexto");
}


console.log(verificaAnoBissexto);