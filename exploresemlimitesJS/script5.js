// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let valor = prompt("digite true ou false para verificar se o valor é booleano");

if (valor === "true" || valor === "false") {
  valor = true;
  alert("é um bolleano");
} else {
  alert("Não é um bolleano");
}
