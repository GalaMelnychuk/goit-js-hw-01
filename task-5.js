"use script";

let userInput = prompt("Please, enter your country");
userInput = userInput.toLowerCase();
let credit;
let message;

switch (userInput) {
  case "китай":
    credit = 100;
    message = `Доставка в ${userInput} будет стоить ${credit} кредитов`;
    break;
  case "чили":
    credit = 250;
    message = `Доставка в ${userInput} будет стоить ${credit} кредитов`;
    break;
  case "австралия":
    credit = 170;
    message = `Доставка в ${userInput} будет стоить ${credit} кредитов`;
  case "индия":
    credit = 80;
    message = `Доставка в ${userInput} будет стоить ${credit} кредитов`;
  case "ямайка":
    credit = 120;
    message = `Доставка в ${userInput} будет стоить ${credit} кредитов`;
  default:
    message = "В вашей стране доставка не доступна";
}

alert(message);
