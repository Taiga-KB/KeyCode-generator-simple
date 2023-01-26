const keycodeInfo = document.getElementsByTagName("h2")

addEventListener("keypress" , (event) => {
    key.textContent = `${event.key}`
    char.textContent = `${event.charCode}`
    code.textContent = `${event.code}`

})

const keyboard = document.getElementById("keyboard")

keyboard.addEventListener("click", () => {
    
})