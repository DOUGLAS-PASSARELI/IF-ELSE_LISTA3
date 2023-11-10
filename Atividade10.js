// 10) Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.
// De 0 a 200   --> Nenhum crédito
// De 201 a 400 --> 20% do valor do saldo médio
// De 401 a 600 --> 30% do valor do saldo médio
// Acima de 601 --> 40% do valor do saldo médio


var saldoMedio = parseFloat (prompt ("Dígite o Saldo Médio no último ano do Cliente: "));

if (saldoMedio >= 201 && saldoMedio <= 400.99999999)
{
    var credDisp = saldoMedio * 0.20;
    alert ("De acordo com o Saldo Médio: R$" + saldoMedio + ". O cliente tem Crédito Disponivel de: R$" + credDisp);
}

if (saldoMedio >= 401 && saldoMedio <= 600.999999999)
{
    var credDisp1 = saldoMedio * 0.3;
    
    alert ("De acordo com o Saldo Médio: R$" + saldoMedio + ". O cliente tem Crédito Disponivel de: R$" + credDisp1);
}

if (saldoMedio >= 601)
{
    var credDisp2 = saldoMedio * 0.4;

    alert ("De acordo com o Saldo Médio: R$" + saldoMedio + ". O cliente tem Crédito Disponivel de: R$" + credDisp2);
}

if (saldoMedio <= 200.9999999)
{
    alert ("CLIENTE NÃO POSSUI CRÉDITO LIBERADO");
}
