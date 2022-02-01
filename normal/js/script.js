let yourMoney = prompt('How much money you have?');
let priceChocolate = prompt('How much one chocolate?');
let c = yourMoney / priceChocolate;
let d = yourMoney % priceChocolate;
console.log(Math.floor(c) + ' chocolate you can buy and your change will be ' + d.toFixed(2));
alert(Math.floor(c) + ' chocolate you can buy and your change will be ' + d.toFixed(2));