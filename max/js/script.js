let yourAmount = prompt('Еnter the amount of the deposit in the bank for 2 months, with an interest rate of 5% per annum.');
let deposit = (5 / 12) * 2;
let amountOfDeposit = yourAmount * (1 + deposit / 100);
console.log('You will have ' + amountOfDeposit.toFixed(2));
alert('You will have ' + amountOfDeposit.toFixed(2));

// 2 && 0 && 3
// 0
// 2 || 0 || 3
// 2
// 2 && 0 || 3
// 3