const credits = '23580';

const pricePerDroid = '3000';

let userInput = prompt('How many Droids you want to buy?');

if (userInput === null) {
    console.log(`Отменено пользователем!`);
} else {
    userInput = Number(userInput);

    let totalPrice;

    totalPrice = userInput * pricePerDroid;

    let creditBalance;

    creditBalance = credits - totalPrice;

    if (totalPrice > credits) {
        console.log(`Недостаточно средств на счету!`);
    } else {
        console.log(`Вы купили ${userInput} дроидов, на счету осталось ${creditBalance} кредитов.`);
    }
}