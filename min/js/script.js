let a = 0.1;
let b = 0.2;
c = a + b;
let sum = c.toFixed(1) == 0.3
console.log(sum);
// alert(sum);

let x = "1";
let y = 2;
let z = Number(x) + y == 3;
console.log(z);
// alert(z);

let howManyGigabytes = prompt('How many gigabytes your flash drive?');
let myFile = 0.820;
let fileOnFlash = Math.floor(howManyGigabytes / myFile);
console.log(fileOnFlash);
alert(fileOnFlash + ' file wih size 820MB!');