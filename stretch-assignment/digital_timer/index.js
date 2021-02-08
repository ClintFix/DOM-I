

let msTens = document.querySelector('#msTens');
let msHundreds = document.querySelector('#msHundreds');
let secondOnes = document.querySelector('#secondOnes');
let secondTens = document.querySelector('#secondTens');
let time = 0;
let timerInterval = window.setInterval(timer,10); //time in ms

function timer() {
    time += 10 //add 10ms
    let timeString = time.toString();
    let timeStringLength = timeString.length;
    if (timeStringLength === 2){
        msTens.textContent = timeString[0];
    } else if (timeStringLength === 3) {
        msTens.textContent = timeString[1];
        msHundreds.textContent = timeString[0];
    } else if (timeStringLength === 4) {
        msTens.textContent = timeString[2];
        msHundreds.textContent = timeString[1];
        secondOnes.textContent = timeString[0];
    } else if (timeStringLength === 5) {
        msTens.textContent = timeString[3];
        msHundreds.textContent = timeString[2];
        secondOnes.textContent = timeString[1];
        secondTens.textContent = timeString[0];
        document.querySelectorAll(".digit").forEach(item => item.style.color = 'red');
        stopTimer();
    }
    return time;
}
console.log(time);
function stopTimer() {
    clearInterval(timerInterval);
};
