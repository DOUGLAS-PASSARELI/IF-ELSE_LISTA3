// 4) O sistema de avaliação de determinada disciplina, é composto por três provas. A primeira prova tem peso 4, a Segunda tem peso 3 e a terceira prova tem peso 3. Faça um algoritmo para calcular a média final de um aluno desta disciplina. Caso a média seja maior ou igual a 7 mostre APROVADO, se a média for entre 5 e 7, mostre em RECUPERAÇÃO, e se for menor do que 5 mostre REPROVADO. 


var prova1 = parseFloat(prompt("Informe a Nota da Primeira Prova: "));

var prova2 = parseFloat(prompt("Informe a Nota da Segunda Prova: "));

var prova3 = parseFloat(prompt("Informe a Nota da Terceira Prova"));

var notaProva1 = prova1 * 0.4;

var notaProva2 = prova2 * 0.3;

var notaProva3 = prova3 * 0.3;

var mediaNota = notaProva1 + notaProva2 + notaProva3;

if(mediaNota >= 7.0){

    alert("Aluno APROVADO");
}

else if(mediaNota >= 5 && mediaNota < 7){

    alert("Aluno de Recuperação");
}

else{

    alert("Aluno REPROVADO");
}

console.log(mediaNota);





