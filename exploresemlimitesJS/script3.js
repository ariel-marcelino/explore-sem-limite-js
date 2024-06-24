// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let = character = prompt("Digite um numero valido");

character = Number(character);

if (typeof character === "number" && !Number.isNaN(character)) {
  alert("é um numero");
} else {
  alert(" não é um numero");
}
