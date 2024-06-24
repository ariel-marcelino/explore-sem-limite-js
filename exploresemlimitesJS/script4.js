//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let character = prompt("Digite uma letra valida");

if (typeof character == "string") {
  alert("é uma string");
} else {
  alert(" Não é uma string!");
}
