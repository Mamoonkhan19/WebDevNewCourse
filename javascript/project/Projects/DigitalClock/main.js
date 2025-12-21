let Dates = new Date()
let clock = document.querySelector("#clock")

let divDate = document.querySelector("#Date")
divDate.innerHTML = `<h3>${Dates.toLocaleDateString()}</h3>`
setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString("default",{
        'minute': 'numeric',
        'hour':"numeric",
        'second':'numeric'
    })
    clock.innerHTML = `<h3>${time}</h3>`
},1000)

console.log("hello world")