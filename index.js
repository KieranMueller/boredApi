const list = document.querySelector(".list-container")
const newActivityBtn = document.querySelector(".new-btn")
const clearBtn = document.querySelector(".clear-btn")

newActivityBtn.addEventListener("click", getActivityHtml)
clearBtn.addEventListener("click", clear)

function getActivityHtml() {
    fetch(`https://apis.scrimba.com/bored/api/activity`)
        .then(response => response.json())
        .then(data => {
            list.innerHTML += `<li>${data.activity}</li>`
        })
}

function clear() {
    list.innerHTML = ``
}

