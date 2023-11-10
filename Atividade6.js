// 6) Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem crescente


var num1 = parseInt (prompt("Dígite o Primeiro Número: "));

var num2 = parseInt (prompt("Dígite o Segundo Número: "));

var num3 = parseInt (prompt ("Dígite o Terceiro Número: "));


if(num1 < num2 && num1 < num3 && num2 < num3){

    alert ("Ordem dos números: " + num1 + " / " + num2 + " / " + num3);
}

else if(num2 < num1 && num2 < num3 && num1 < num3){

    alert ("Ordem dos números: " + num2 + " / " + num1 + " / "+ num3);
}

else if (num3 < num1 && num3 < num2 && num2 < num1){

    alert("Ordem dos Números: " + num3 + " / "+ num2 + " / " + num1)
}

else if (num1 < num2 && num1 < num3 && num3 < num2){

    alert ("Ordem dos Números: " + num1 + " / "+ num3 + " / " + num2);
}

else if (num2 < num1 && num2 < num3 && num3 < num1){

    alert ("Ordem dos Números: " + num2 + " / "+ num3 + " / " + num1);
}

else if (num3 < num1 && num3 < num2 && num1 < num2){

    alert ("Ordem dos Números: " + num3 + " / "+ num1 + " / " + num2);
}