const timeContainer = document.querySelector(".time-container")

setInterval(function(){
    timeContainer.textContent = new Date().toLocaleTimeString()
}, 1000)

