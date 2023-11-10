const startbtn=document.getElementById("start");

const stopbtn=document.getElementById("stop");

const resetbtn = document.getElementById("reset")

const timerbtn = document.getElementById("timer")

let interval;
let timeLeft = 1500;//25minutes = 25*60 seconds=1500seconds

function updateTimer(){
    let minutes=Math.floor(timeLeft / 60)
    let seconds=timeLeft%60
    let formattedTime= `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

    timerbtn.innerHTML=formattedTime
}

function startTimer(){
    interval=setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft===0){
            clearInterval(interval)
            alert("Time's up!")
            timeLeft=1500;
            updateTimer();
        }
    }, 1000);

}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}

startbtn.addEventListener("click",startTimer)
stopbtn.addEventListener("click",stopTimer)
resetbtn.addEventListener("click",resetTimer)

