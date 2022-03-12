const today = new Date();
const currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekday = weekDays[today.getDay()-1];
console.log('Solution to the Task 1:')
console.log('Today is ' + weekday)
console.log('Current time is ' + currentTime)

/***************************************************************/

function printThisPage() {
    window.print();
}

/****************************************************************/

let date = today.getDate();
let month = today.getMonth();
if (today.getDate() < 10) date = '0'+today.getDate();
if (today.getMonth() < 10) month = '0'+today.getMonth();
console.log('Solution to the Task 3:')
console.log(date+'-'+month+'-'+today.getFullYear())
console.log(date+'/'+month+'/'+today.getFullYear())

/******************************************************************/

const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
const tempYear = 2020;
console.log('Solution to the Task 4:')
console.log(`The statement that the year ${tempYear} is a leap year is `+isLeapYear(tempYear))

/******************************************************************/

const guessTheNumber = () => {
    let inputNumber = prompt('Guess the number:');
    let randomNumber = Math.floor(Math.random()*10)+1;
    if (inputNumber == randomNumber) alert('Good work!');
    else alert('Not matched! The number was '+randomNumber);
}

/******************************************************************/

const addNumbers = () => {
    let aNum = document.getElementById('aNumber').value;
    let bNum = document.getElementById('bNumber').value;
    document.getElementById('result').innerHTML = parseInt(aNum) + parseInt(bNum);
};
const subtractNumbers = () => {
    let aNum = document.getElementById('aNumber').value;
    let bNum = document.getElementById('bNumber').value;
    document.getElementById('result').innerHTML = parseInt(aNum) - parseInt(bNum);
};
const multiplyNumbers = () => {
    let aNum = document.getElementById('aNumber').value;
    let bNum = document.getElementById('bNumber').value;
    document.getElementById('result').innerHTML = parseInt(aNum) * parseInt(bNum);
};
const divideNumbers = () => {
    let aNum = document.getElementById('aNumber').value;
    let bNum = document.getElementById('bNumber').value;
    document.getElementById('result').innerHTML = parseInt(aNum) / parseInt(bNum);
};
