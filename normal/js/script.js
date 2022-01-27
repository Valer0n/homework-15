let yourMoney = prompt('How much money you have?');
let priceChocolate = prompt('How much one chocolate?');
let c = yourMoney / priceChocolate;
let d = yourMoney % priceChocolate;
console.log(Math.floor(c) + ' chocolate you can buy and your change will be ' + d.toFixed(2));
alert(Math.floor(c) + ' chocolate you can buy and your change will be ' + d.toFixed(2));


let a = 0;
let sum = Math.floor(yourNumber / 10);
a *= 10;
a += sum % 10;
console.log(a);
alert(a);


let yourNumber = prompt('Сall out a three-digit number.');
var x = 0;
for (; yourNumber; yourNumber = Math.floor(yourNumber / 10)) {
    x *= 10;
    x += yourNumber % 10;
}
yourNumber = x;
console.log(x);
// alert(x);