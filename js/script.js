// how do i start it off

let actualTimeDisplay = document.getElementById("actual-time").getElementsByTagName("h2")

function displayCurrentTime() {

const timeIntervID = setInterval(() => {
    
  let [hour, minute, , ampm] = new Date().toLocaleTimeString("en-US").split(/:| /)
  actualTimeDisplay[0].innerText = `${hour}:${minute} ${ampm}` 
}, 500);
 
}

displayCurrentTime()