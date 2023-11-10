// 5) Elabore um algoritmo que leia 3 valores inteiros e mostre o maior valor entre eles.

var num1 = parseInt(prompt("Dígite o Primeiro Número: "));

var num2 = parseInt (prompt ("Dígite o Segundo Número: "));

var num3 = parseInt (prompt ("Dígite o Terceiro Número"));

if (num1 > num2 && num1 > num3){

    alert("O número " + num1 + " é o maior");
}

else if (num2 > num1 && num2 > num3){

    alert ("O número " + num2 + " é o maior"); 
}

else if (num3 > num1 && num3 > num2){
    
    alert ("O número " + num3 + " é o maior");

}

else{
    alert ("Os núemros são iguais")
}