// #region Declarations
current = document.getElementById("flowers")
current.style.textDecorationLine = "underline"
current.style.textDecorationStyle = "solid"
current.style.textUnderlineOffset = "100%"
const form = document.getElementById("searching")
const container = document.getElementById("pictures")
container.innerHTML = ""
const folder = "flowers/"
const acceptableColours = ["brightred", "lightred", "lightorange", "brightorange", "silver", "gold", "lightyellow", "brightyellow", "darkgreen", "lightgreen", "brightgreen", "lightblue", "darkblue", "brightblue", "lightpurple", "darkpurple", "brightpurple", "lightpink", "darkpink", "brightpink", "black", "white", "beige", "grey", "brown"]
let search = ""
// #endregion

// #region Startup
let index = Math.floor(Math.random() * acceptableColours.length)
search = acceptableColours[index]
search = normalise(search)
finder(search)

let music = sessionStorage.getItem("music")
if (music = "true") {
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

window.addEventListener("keydown", (e) => {
    const input = document.getElementById("searchBar")
    if (e.code === "Space" && document.activeElement !== input) {
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
            bgMusic.currentTime = 0
            bgMusic.volume = 0.4
            document.body.appendChild(bgMusic)
            bgMusic.play()
        }
    }
})


current.addEventListener('click', (e) => {
    e.preventDefault()
})

form.addEventListener('submit', (e) => {
    container.innerHTML = ""
    e.preventDefault()
    const input = document.getElementById("searchBar")
    search = input.value
    input.value = search
    search = search.toLowerCase()
    search = search.replaceAll(" ", "")
    search = normalise(search)
    console.log("finding:")
    search = normalise(search)
    finder(search)
})

// #endregion

// #region Image finder
function finder(x) {
    if (acceptableColours.includes(x)) {
        create(x)
    } else if (x === "red") {
        let options = ["light", "bright"]
        for (let i = 0; i <= 1; i++) {
            let shade = options[i]
            x = shade + "red"
            console.log(x)
            create(x)
        }
    } else if (x === "orange") {
        let options = ["light", "bright"]
        for (let i = 0; i <= 1; i++) {
            let shade = options[i]
            x = shade + "orange"
            console.log(x)
            create(x)
        }
    } else if (x === "yellow") {
        let options = ["light", "bright"]
        for (let i = 0; i <= 1; i++) {
            let shade = options[i]
            x = shade + "yellow"
            console.log(x)
            create(x)
        }
    } else if (x === "green") {
        let options = ["light", "bright", "dark"]
        for (let i = 0; i <= 1; i++) {
            let shade = options[i]
            x = shade + "green"
            console.log(x)
            create(x)
        }
    } else if (x === "blue") {
        let options = ["light", "bright", "dark"]
        for (let i = 0; i <= 1; i++) {
            let shade = options[i]
            x = shade + "blue"
            console.log(x)
            create(x)
        }
    } else if (x === "pink") {
        let options = ["light", "bright", "dark"]
        for (let i = 0; i <= 1; i++) {
            let shade = options[i]
            x = shade + "pink"
            console.log(x)
            create(x)
        }
    } else if (x === "purple") {
        let options = ["light", "bright", "dark"]
        for (let i = 0; i <= 1; i++) {
            let shade = options[i]
            x = shade + "purple"
            console.log(x)
            create(x)
        }
    } else if (x === "peach") {
        let options = ["lightpink", "lightorange"]
        for (let i = 0; i <= 1; i++) {
            x = options[i]
            console.log(x)
            create(x)
        }
    } else {
        const notFound = document.createElement('p')
        let index = Math.floor(Math.random() * 24)
        let random = acceptableColours[index]
        notFound.textContent = "'" + x + "' not found. Try browsing '" + random + "' instead:"
        notFound.style.marginBottom = "2%"
        notFound.style.marginTop = "2%"
        notFound.style.marginLeft = "4%"
        notFound.style.color = "white"
        container.appendChild(notFound)
        create(random)
    }
}

// #endregion

// #region Housekeeping
function hexToHSL(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) { h = s = 0; }
    else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function classifyColor(hex) {
    const { h, s, l } = hexToHSL(hex);
    if (s < 10) {
        if (l > 95) return "white";
        if (l < 15) return "black";
        if (l > 75) return "silver";
        if (l > 35) return "grey";
        return "grey";
    }
    if (h > 35 && h < 55 && s > 40 && l > 40) return "gold";
    if (h > 25 && h < 45 && s < 40 && l > 70) return "beige";
    if (h > 10 && h < 40 && s < 50 && l < 40) return "brown";
    let family = "";
    if (h < 15 || h >= 345) family = "red";
    else if (h < 45) family = "orange";
    else if (h < 70) family = "yellow";
    else if (h < 160) family = "green";
    else if (h < 260) family = "blue";
    else if (h < 300) family = "purple";
    else family = "pink";
    if (l > 75) return "light" + family;
    if (l < 35) return "dark" + family;
    return "bright" + family;
}

function normalise(search) {
    if (search === "gray" || search === "silver") {
        search = "grey"
    } else if (search === "magenta") {
        search = "darkpink"
    } else if (search === "cream") {
        search = "white"
    } else if (search === "violet") {
        search = "darkpurple"
    } else if (search === "indigo") {
        search = "darkblue"
    } else if (search === "maroon") {
        search = "brightred"
    } else if (search === "biege") {
        search = "beige"
    } else if (search === "golden") {
        search = "gold"
    } else if (search.includes("#")) {
        search = classifyColor(search)
    } else {
        search = search
    }
    console.log("normalised")
    return search
}

function create(x) {
    const div = document.createElement("div")
    div.id = "place"
    container.appendChild(div)
    for (let i = 1; i <= 15; i++) {
        const img = document.createElement("img")
        img.src = folder + x + "/" + i + ".jpg"
        div.appendChild(img)
        img.className = "images"
    }
    console.log("made")
}

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
