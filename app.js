const today = new Date();
const currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekday = weekDays[today.getDay()-1];
    console.log('Solution to the Task 1:')
    console.log('Today is ' + weekday)
    console.log('Current time is ' + currentTime)