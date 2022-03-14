const today = new Date();
const currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekday = weekDays[today.getDay()-1];
document.getElementById("task1Date").innerHTML = 'Today is ' + weekday;
document.getElementById("task1Time").innerHTML = 'Current time is ' + currentTime;
/*console.log('Solution to the Task 1:')
console.log('Today is ' + weekday)
console.log('Current time is ' + currentTime)*/

/***************************************************************/

function printThisPage() {
    window.print();
}

/****************************************************************/

let date = today.getDate();
let month = today.getMonth()+1;
if (today.getDate() < 10) date = '0'+today.getDate();
if (today.getMonth() < 10) month = '0'+(today.getMonth()+1);
// console.log('Solution to the Task 3:')
document.getElementById("task3Date").innerHTML = date+'-'+month+'-'+today.getFullYear();
// console.log(date+'/'+month+'/'+today.getFullYear())

/******************************************************************/

const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
const task4Res = () => {
    let tempYear = parseInt(document.getElementById("task4Year").value);
    document.getElementById("task4Result").innerHTML =`The statement that the year ${tempYear} is a leap year is `+isLeapYear(tempYear);
}

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

/******************************************************************/

document.getElementById("theURL").innerHTML = document.URL;

/******************************************************************/

const createVariableByName = () => {
    let name = document.getElementById("task8Name").value;
    this[name] = 42;
    document.getElementById('task8Msg').innerHTML = `A variable with the name ${name} has been created. Its value is ${this[name]}`;
}

/******************************************************************/

const stringReverser = () => {
    let task9Input = document.getElementById("task9String").value;
    let task9Reverse = task9Input.split('').reverse().join("");
    document.getElementById("task9Reversed").innerHTML = task9Reverse;
}

/******************************************************************/

function animateString(id) {
    const textNode = document.getElementById(id).childNodes[0];
    let text = textNode.data;
    console.log(document.getElementById(id))
    console.log(textNode)
    console.log(text)

    setInterval(() => {
        text = text[text.length-1] + text.substring(0, text.length - 1);
        textNode.data = text;
    },100 )
}

/******************************************************************/

const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

/******************************************************************/
