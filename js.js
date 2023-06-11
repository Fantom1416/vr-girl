const messages = document.querySelector(".messages")
const form = document.querySelector(".form")
const text = document.querySelector(".form input")
const microphone = document.querySelector(".fa-microphone")
const plane = document.querySelector(".fa-paper-plane")

const Navbar = document.querySelector(".navbar")
const Contact = document.querySelectorAll(".contact")
const absolute_box = document.querySelector(".absolute_box")
const P = document.querySelector(".name")
const H1 = document.querySelector(".contact1")
const status = document.querySelector(".status")





let randomMsg = [
    "как вы?",
    "Ага",
    "нормально",
    "Хm",
    "...",
    "Привет",
    "ок",
    "нееет",
    "Хорошо",
    "да, конечно",
    "да",
    "нима килйапсиз?",
    "кайдасиз?",
    "я тоже скучаю...(",
    "Яхши",
    "Не поняла...",
    "не знаю..",
    // "чё?",
    "Chunmadim?",
    "что?",
    "вы о чём?",
    "Давай",
    "Доброй ночи",
    "Споки ноки",
    "Пожалуйста...",
    "Ладно",
    // "ты похож на противотанковую пехотную танку т34",
    // "не матерись!",

]


H1.addEventListener("click", () => {
    P.value = "osha ismi"
})



text.addEventListener("keyup", (e) => {
    let value = e.target.value
    if (value.trim() === "") {
        microphone.style.display = "inline"
        plane.style.display = "none"
    } else {
        microphone.style.display = "none"
        plane.style.display = "inline"
    }
}
)
function profileOchish() {
    absolute_box.style.transform = "translateY(57px) translateX(550px)"
}
function profileYopish() {
    absolute_box.style.transform = "translateY(-800px) translateX(550px)"
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let value = text.value
    if (value === "") {
        return;
    }
    let div = document.createElement("div")
    div.className = "msg me"
    let date = new Date()
    div.innerHTML = `
                        <div class="msg_text">
                        <p>${value}</p>
                        <span>${date.getHours()} : ${date.getMinutes()}</span>
                        </div>`
    messages.appendChild(div)
    text.value = ""



    setTimeout(() => {
        // status.innerHTML = "typing..."

        div.innerHTML = `
                        <div class="msg_text">
                        <p>${value}</p>
                        <span>${date.getHours()} : ${date.getMinutes()}
                        </span>

                        </div>`
        response()
    }, 3000)
})



function response() {
    let div = document.createElement("div")
    div.className = "msg another"
    let date = new Date()

    let sms = randomMsg[Math.floor(Math.random() * randomMsg.length)]
    console.log(sms)
    div.innerHTML = `
    <img src="./sh2.jpg" alt="">
                <div class="msg_text">
                <p>${sms}</p>
                <span>${date.getHours()} : ${date.getMinutes()}</span>
                </div>`
    messages.appendChild(div)

    text.value = ""
}

