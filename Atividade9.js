// 9) Elabore um algoritme que leia o ano de nascimento do usuário e informe se ele pode ou não votar. Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.

var anoNascimento = parseInt (prompt ("Dígite seu ano de Nascimento: "));

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

var idade = anoAtual - anoNascimento;

if (idade <= 15)
{
    alert ("Na idade de: " + idade + " anos, É PROBIDO VOTAR!");
}

else if (idade >= 16 && idade <= 17 || idade >= 70)
{
    alert ("Na idade de: " + idade + " anos. O VOTO É FACULTATIVO!");
}

else {
    alert ("Na idade de: " + idade + " anos. É OBRIGATÓRIO VOTAR!");
}

console.log(idade);