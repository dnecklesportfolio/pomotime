
let actualTimeDisplay = document.getElementById("actual-time").getElementsByTagName("h2")
let status = ["you aren't running any timers currently","Focusing Mode","Resting.."]
function displayCurrentTime() {
const timeIntervID = setInterval(() => {    
  let [hour, minute, , ampm] = new Date().toLocaleTimeString("en-US").split(/:| /)
  actualTimeDisplay[0].innerText = `${hour}:${minute} ${ampm}` 
}, 500);
}

displayCurrentTime()
let startBtn = document.getElementById('start-btn')
let pauseBtn = document.getElementById('pause-btn')
let resetBtn = document.getElementById('reset-btn')
 
let pomoValue = document.getElementById('Pomo').getAttribute('value')
let breakValue = document.getElementById('Break').getAttribute('value')
let lbValue = document.getElementById('Long-Break').getAttribute('value')
let numSessionValue = document.getElementById('Num-of-Sessions').getAttribute('value')

let pomoDuration = pomoValue ? pomoValue : 25
let breakDuration = breakValue ? breakValue : 5
let longBreakDuration = lbValue ? lbValue : 7
let numofSessions = numSessionValue ? numSessionValue : 2

console.log(pomoDuration,breakDuration,longBreakDuration,numofSessions)

startBtn.addEventListener('click', eventHandler)
function eventHandler(event) {

}

/* on StartbuttonPress
    updateDisplay()
        say Focusing()
    run startPomoTimer()
        startCountdownTimer()
    run startOverallTimer()
  */      