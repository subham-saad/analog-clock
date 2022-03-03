const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')

const timeElemnt = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const toggleElement = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
const  months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

// switching dark-light modes
toggleElement.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'

    }
    else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light-Mode'
    }
})
// get time 
function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();

    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';


    // scaling property
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return(num-in_min) * (out_max-out_min) / (in_max- in_min) + (out_min)
    }
     
    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 359)}deg)`
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0, 359)}deg)`
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0, 359)}deg)`

    timeElemnt.innerHTML = `${hoursForClock} : ${minutes} : ${seconds}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date}</sapn>`
}
setTime();
setInterval(setTime, 1000)

