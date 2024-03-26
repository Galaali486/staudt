// counting days to new year
const countDownDateTime = new Date().getTime() + (5 * 60 * 60 * 1000);
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");

const hoursValue1 = document.querySelector("#hours1");
const minutesValue1 = document.querySelector("#minutes1");
const secondsValue1 = document.querySelector("#seconds1");
// run this function every 1000 ms or 1 second
let x = setInterval(function () {
 const dateTimeNow = new Date().getTime();
 let difference = countDownDateTime - dateTimeNow;
 // calculating time and assigning values
 hoursValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
 );
 minutesValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60)) / (1000 * 60)
 );
 secondsValue.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
 if (difference < 0) {
 clearInterval(x);
 }
}, 1000);

let y = setInterval(function () {
    const dateTimeNow = new Date().getTime();
    let difference = countDownDateTime - dateTimeNow;

 hoursValue1.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
 );
 minutesValue1.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60)) / (1000 * 60)
 );
 secondsValue1.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
 if (difference < 0) {
 clearInterval(x);
 }
}, 1000);




