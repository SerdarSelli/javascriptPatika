let namee = prompt("write your name please")
document.getElementById("myName").innerHTML = namee

function showTime() {

    let now = new Date() 
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' })
    let time = now.toLocaleTimeString('tr-TR') 
    myClock.innerHTML = time + ' ' + day 
    
}

setInterval(showTime, 1000) 
