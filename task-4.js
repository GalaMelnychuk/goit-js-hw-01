'use script';

const credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt("How many Droids you want to buy?");

if (userInput === null) {
  console.log(`Отменено пользователем!`);
} else if (Number.isNaN(Number(userInput))) {
  console.log(`Введите число!`);
  console.log(typeof userInput);
} else {
  let totalPrice;
  userInput = Number(userInput);
  totalPrice = userInput * pricePerDroid;
  let creditBalance;
  creditBalance = credits - totalPrice;

  if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`);
  } else {
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${creditBalance} кредитов.`
    );
  }
}
