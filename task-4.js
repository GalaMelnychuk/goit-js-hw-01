"use script";

const credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt("How many Droids you want to buy?");

if (userInput === null) {
  alert(`Отменено пользователем!`);
} else if (Number.isNaN(Number(userInput))) {
  alert(`Введите число!`);
} else {
  let totalPrice;
  userInput = Number(userInput);
  totalPrice = userInput * pricePerDroid;
  let creditBalance;
  creditBalance = credits - totalPrice;

  if (totalPrice > credits) {
    alert(`Недостаточно средств на счету!`);
  } else {
    alert(
      `Вы купили ${userInput} дроидов, на счету осталось ${creditBalance} кредитов.`
    );
  }
}
