//8) Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes 
// categorias:
// Infantil A --> 5 a 7 anos
// Infantil B --> 8 a 10 anos
// Juvenil A  --> 11 a 13 anos
// Juvenil B  --> 14 a 17 anos
// Adulto     --> Maior ou igual a 18 anos


var idade = parseInt (prompt ("DÍgite a Idade do Nadador: "));

if (idade >= 5 && idade <= 7)
{
    alert ("Idade: " + idade + " anos. Classificada em INFANTIL A");
}

else if (idade >= 8 && idade <= 10)
{
    alert ("Idade: " + idade + " anos. Classificada em INFATIL B");
}

else if (idade >= 11 && idade <= 13)
{
    alert ("Idade: " + idade + " anos. Classisficada em JUVENIL A");
}

else if (idade >= 14 && idade <= 17)
{
    alert ("Idade: " + idade + " anos. Classisficada em JUVENIL B");
}

else if (idade >= 18)
{
    alert ("Idade: " + idade + " anos. Classificada em ADULTO")
}

else {
    alert ("Idade: " + idade + " anos. Não pode competir")
}