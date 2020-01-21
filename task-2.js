'use script';

const total = 100;
let ordered = prompt("Input ordered number");
ordered = Number(ordered);

if (ordered > total) {
  console.log(`На складе недостаточно товаров!`);
} else if (ordered < total) {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
}
