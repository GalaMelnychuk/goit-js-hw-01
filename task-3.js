'use script'

const userInput = prompt ('Input password');

const ADMIN_PASSWORD = 'jqueryismyjam'; 

let message;

if (userInput === null) {
    message = `Отменено пользователем!`;
} else if (userInput === ADMIN_PASSWORD) {
    message = `Добро пожаловать!`; 
} else {
    message = `Доступ запрещен, неверный пароль!`;
}
alert(message);