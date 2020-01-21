"use script";
let input;
let total = 0;
let message;

while (true) {
  input = prompt("Пожалуйста, введите число");

  if (Number.isNaN(Number(input))) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  } else if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
}

message = `Общая сумма чисел равна ${total}`;
alert(message);
