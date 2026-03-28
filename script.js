// #region Declaration
const current = document.getElementById("home")
current.style.textDecorationLine = "underline"
current.style.textDecorationStyle = "solid"
current.style.textUnderlineOffset = "100%"
const button = document.getElementById("tryButton")
const possibilities = ["brightred", "lightred", "lightorange", "brightorange", "gold", "lightyellow", "brightyellow", "darkgreen", "lightgreen", "brightgreen", "lightblue", "darkblue", "brightblue", "lightpurple", "darkpurple", "brightpurple", "lightpink", "darkpink", "brightpink", "black", "white", "beige", "grey", "brown"]
const flowers = document.querySelectorAll(".flowers")
const objects = document.querySelectorAll(".objects")
const patterns = document.querySelectorAll(".textures")
// #endregion

// #region Image Finder
choose(flowers, "flowers/")
choose(objects, "objects/")
choose(patterns, "patterns/")

function choose(array, fName) {
    array.forEach(element => {
        let index = Math.floor(Math.random() * 24)
        let image = Math.ceil(Math.random() * 15)
        element.src = fName + possibilities[index] + "/" + image + ".jpg"
    })
}
// #endregion

// #region Housekeeping
button.addEventListener('click', () => {
    window.location.href = "gradients.html"
})
// #endregion

// #region Music
let musical = sessionStorage.getItem("music")

document.addEventListener("DOMContentLoaded", () => {
    if (!musical) {
        const popup = document.createElement("form")
        popup.id = "popup"
        popup.style.backgroundColor = "white"
        popup.style.borderRadius = "20px"
        popup.style.zIndex = "10"
        popup.style.display = "flex"
        const question = document.createElement("h1")
        question.textContent = "Would you like the musical experience?"
        question.id = "music_question"
        const buttons = document.createElement("div")
        buttons.id = "popupButtons"
        const yesButton = document.createElement("button")
        yesButton.type = "button"
        yesButton.textContent = "Yes"
        const noButton = document.createElement("button")
        noButton.type = "button"
        noButton.textContent = "No"
        popup.appendChild(question)
        buttons.appendChild(yesButton)
        buttons.appendChild(noButton)
        popup.appendChild(buttons)
        document.body.appendChild(popup)
        yesButton.addEventListener("click", () => {
            sessionStorage.setItem("music", "true")
            popup.style.display = "none"
            let music = sessionStorage.getItem("music")
            if (music === "true") {
                let bgMusic = new Audio
                bgMusic.src = "music/bgMusic.mp3"
                bgMusic.id = "backgroundMusic"
                bgMusic.loop = true
                let startTime = sessionStorage.getItem("MusicTime")
                if (startTime) {
                    bgMusic.currentTime = startTime
                } else {
                    bgMusic.currentTime = 0
                }
                bgMusic.volume = 0.4
                document.body.appendChild(bgMusic)
                bgMusic.play()
            }
        })
        noButton.addEventListener("click", () => {
            sessionStorage.setItem("music", "false")
            popup.style.display = "none"
        })
    } else {
        let bgMusic = new Audio
        bgMusic.src = "music/bgMusic.mp3"
        bgMusic.id = "backgroundMusic"
        bgMusic.loop = true
        let startTime = sessionStorage.getItem("MusicTime")
        if (startTime) {
            bgMusic.currentTime = startTime
        } else {
            bgMusic.currentTime = 0
        }
        bgMusic.volume = 0.4
        document.body.appendChild(bgMusic)
        bgMusic.play()
    }
})

window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault()
        let bgMusic = document.getElementById("backgroundMusic")
        if (bgMusic) {
            if (!bgMusic.paused) {
                bgMusic.currentTime = 0
                bgMusic.pause()

            } else {
                bgMusic.currentTime = 0
                bgMusic.play()
            }
        } else {
            let bgMusic = new Audio
            bgMusic.src = "music/bgMusic.mp3"
            bgMusic.id = "backgroundMusic"
            bgMusic.loop = true
            let startTime = sessionStorage.getItem("MusicTime")
            if (startTime) {
                bgMusic.currentTime = startTime
            } else {
                bgMusic.currentTime = 0
            }
            bgMusic.volume = 0.4
            document.body.appendChild(bgMusic)
            bgMusic.play()
        }
    }
})

const links = document.querySelectorAll("a")
links.forEach(link => {
    saveDataToSessionStorage();
})
window.addEventListener('beforeunload', () => {
    saveDataToSessionStorage();
});

function saveDataToSessionStorage() {
    let bgMusic = document.getElementById("backgroundMusic")
    if (bgMusic) {
        let stopTime = bgMusic.currentTime
        sessionStorage.setItem("MusicTime", stopTime)
    }
}

// #endregion
