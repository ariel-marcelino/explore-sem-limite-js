// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number1 = prompt("Digite primeiro numero");
let number2 = prompt("Digite segundo numero");

number1 = Number(number1);
number2 = Number(number2);

let result = number1 + number2;

alert(`a soma dos dois numeros é ${result}`);

if (result % 2 == 0) {
  alert(`${result} é um numero par`);
} else {
  alert(`${result} é um numero impar`);
}
