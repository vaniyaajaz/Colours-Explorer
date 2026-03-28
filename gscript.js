//#region Declarations

//#region Constants
const current = document.getElementById("gradient")
current.style.textDecorationLine = "underline"
current.style.textDecorationStyle = "solid"
current.style.textUnderlineOffset = "100%"
const colorInput = document.getElementById("colourChoose")
const textInput = document.getElementById("colourWrite")
const monochrome = document.getElementById("monochrome")
const coloursM = document.getElementById("coloursmono")
const coloursA = document.getElementById("coloursana")
const analogous = document.getElementById("analogous")
const coloursC = document.getElementById("colourscomp")
const complementary = document.getElementById("complementary")
const coloursS = document.getElementById("colourssha")
const shades = document.getElementById("shades")
const coloursT = document.getElementById("colourstint")
const tint = document.getElementById("tint")
const coloursSU = document.getElementById("colourssun")
const sunset = document.getElementById("sunset")
const storeGradient = document.getElementById("gradientsforpage")
const hexValuesMono = []
const hexValuesAna = []
const hexValuesComp = []
const hexValuesShade = []
const hexValuesTint = []
const hexValuesSunset = []

//#endregion

//#region Variables

let givenValue = "000000"
let red = 0
let blue = 0
let green = 0
let gradient = false

//#endregion

//#endregion

//#region Event Listeners
current.addEventListener('click', (e) => {
    e.preventDefault()
})

textInput.addEventListener('input', () => {
    colorInput.value = textInput.value
})

colorInput.addEventListener('input', () => {
    textInput.value = colorInput.value
})

textInput.addEventListener('change', () => {
    givenValue = textInput.value
    givenValue = colorInput.value
    checkAndCall(givenValue)
})

colorInput.addEventListener('change', () => {
    givenValue = colorInput.value
    checkAndCall(givenValue)
})

//#endregion

// #region Startup
givenValue = "#1a71ff"
checkAndCall(givenValue)

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
// #endregion

//#region Gradients
function gradientClassy(x) {
    let hex = x.replace("#", "")
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)
    for (let i = 0; i < 3; i++) {
        r = Math.min(255, r + 20)
        g = Math.min(255, g + 20)
        b = Math.min(255, b + 20)
        let newHex = r.toString(16).padStart(2, '0') +
            g.toString(16).padStart(2, '0') +
            b.toString(16).padStart(2, '0')
        CreateOfGradientMono(newHex)
        hexValuesMono.push("#" + newHex)
    }
}

function gradientNatural(x) {
    let hex = x.replace("#", "");
    let r1 = parseInt(hex.substring(0, 2), 16);
    let g1 = parseInt(hex.substring(2, 4), 16);
    let b1 = parseInt(hex.substring(4, 6), 16);
    let r4 = b1;
    let g4 = r1;
    let b4 = g1;
    function glue(r, g, b) {
        let rs = Math.round(r).toString(16).padStart(2, '0');
        let gs = Math.round(g).toString(16).padStart(2, '0');
        let bs = Math.round(b).toString(16).padStart(2, '0');
        return "#" + rs + gs + bs;
    }
    let two = glue((r1 + r1 + r4) / 3, (g1 + g1 + g4) / 3, (b1 + b1 + b4) / 3);
    hexValuesAna.push(two)
    CreateOfGradientAna(two);
    let three = glue((r1 + r4 + r4) / 3, (g1 + g4 + g4) / 3, (b1 + b4 + b4) / 3);
    hexValuesAna.push(three)
    CreateOfGradientAna(three);
    let four = glue(r4, g4, b4);
    hexValuesAna.push(four)
    CreateOfGradientAna(four);
}

function gradientPop(x) {
    let hex = x.replace("#", "");
    let r1 = parseInt(hex.substring(0, 2), 16)
    let g1 = parseInt(hex.substring(2, 4), 16)
    let b1 = parseInt(hex.substring(4, 6), 16)
    let r4 = 255 - r1
    let g4 = 255 - g1
    let b4 = 255 - b1
    function glue(r, g, b) {
        let rs = Math.round(r).toString(16).padStart(2, '0')
        let gs = Math.round(g).toString(16).padStart(2, '0')
        let bs = Math.round(b).toString(16).padStart(2, '0')
        return "#" + rs + gs + bs;
    }
    let one = (glue((r1 + r1 + r4) / 3, (g1 + g1 + g4) / 3, (b1 + b1 + b4) / 3))
    let two = (glue((r1 + r4 + r4) / 3, (g1 + g4 + g4) / 3, (b1 + b4 + b4) / 3))
    let three = (glue(r4, g4, b4))
    hexValuesComp.push(one)
    hexValuesComp.push(two)
    hexValuesComp.push(three)
    CreateOfGradientComp(one)
    CreateOfGradientComp(two)
    CreateOfGradientComp(three)
}

function gradientShade(x) {
    let hex = x.replace("#", "")
    let r1 = parseInt(hex.substring(0, 2), 16)
    let g1 = parseInt(hex.substring(2, 4), 16)
    let b1 = parseInt(hex.substring(4, 6), 16)
    let r4 = r1 * 0.2
    let g4 = g1 * 0.2
    let b4 = b1 * 0.2
    function glue(r, g, b) {
        let rs = Math.round(r).toString(16).padStart(2, '0')
        let gs = Math.round(g).toString(16).padStart(2, '0')
        let bs = Math.round(b).toString(16).padStart(2, '0')
        return "#" + rs + gs + bs
    }
    let one = (glue((r1 + r1 + r4) / 3, (g1 + g1 + g4) / 3, (b1 + b1 + b4) / 3))
    let two = (glue((r1 + r4 + r4) / 3, (g1 + g4 + g4) / 3, (b1 + b4 + b4) / 3))
    let three = (glue(r4, g4, b4))
    hexValuesShade.push(one)
    hexValuesShade.push(two)
    hexValuesShade.push(three)
    CreateOfGradientShade(one)
    CreateOfGradientShade(two)
    CreateOfGradientShade(three)
}

function gradientTint(x) {
    let hex = x.replace("#", "")
    let r1 = parseInt(hex.substring(0, 2), 16)
    let g1 = parseInt(hex.substring(2, 4), 16)
    let b1 = parseInt(hex.substring(4, 6), 16)
    let r4 = r1 * 0.8
    let g4 = g1 * 0.8
    let b4 = b1 * 0.8
    function glue(r, g, b) {
        let rs = Math.round(r).toString(16).padStart(2, '0')
        let gs = Math.round(g).toString(16).padStart(2, '0')
        let bs = Math.round(b).toString(16).padStart(2, '0')
        return "#" + rs + gs + bs
    }
    let one = (glue((r1 + r1 + r4) / 3, (g1 + g1 + g4) / 3, (b1 + b1 + b4) / 3))
    let two = (glue((r1 + r4 + r4) / 3, (g1 + g4 + g4) / 3, (b1 + b4 + b4) / 3))
    let three = (glue(r4, g4, b4))
    hexValuesTint.push(one)
    hexValuesTint.push(two)
    hexValuesTint.push(three)
    CreateOfGradientTint(one)
    CreateOfGradientTint(two)
    CreateOfGradientTint(three)
}

function gradientSunset(x) {
    let hex = x.replace("#", "");
    let r1 = parseInt(hex.substring(0, 2), 16)
    let g1 = parseInt(hex.substring(2, 4), 16)
    let b1 = parseInt(hex.substring(4, 6), 16)
    let r4 = (r1 + g1) / 2
    let g4 = (g1 + b1) / 2
    let b4 = (b1 + r1) / 2

    function glue(r, g, b) {
        let rs = Math.round(r).toString(16).padStart(2, '0')
        let gs = Math.round(g).toString(16).padStart(2, '0')
        let bs = Math.round(b).toString(16).padStart(2, '0')
        return "#" + rs + gs + bs
    }
    let one = (glue((r1 + r1 + r4) / 3, (g1 + g1 + g4) / 3, (b1 + b1 + b4) / 3))
    let two = (glue((r1 + r4 + r4) / 3, (g1 + g4 + g4) / 3, (b1 + b4 + b4) / 3))
    let three = (glue(r4, g4, b4));
    hexValuesSunset.push(one)
    hexValuesSunset.push(two)
    hexValuesSunset.push(three)
    CreateOfGradientSunset(one)
    CreateOfGradientSunset(two)
    CreateOfGradientSunset(three)
}

//#endregion

//#region CreateOfValues

function CreateOfValueMono(x) {
    let h1 = document.createElement('h1')
    h1.textContent = "Monochromatic:"
    let input = document.createElement('input')
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = "text"
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    monochrome.prepend(h1)
    div.appendChild(input)
    div.appendChild(p)
    coloursM.appendChild(div)
    hexValuesMono.unshift(x)
}

function CreateOfValueAna(x) {
    let h1 = document.createElement('h1')
    h1.textContent = "Analogous:"
    let input = document.createElement('input')
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = "text"
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    analogous.prepend(h1)
    div.appendChild(input)
    div.appendChild(p)
    coloursA.appendChild(div)
    hexValuesAna.unshift(x)
}


function CreateOfValueComp(x) {
    let h1 = document.createElement('h1')
    h1.textContent = "Complementary:"
    let input = document.createElement('input')
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = "text"
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    complementary.prepend(h1)
    div.appendChild(input)
    div.appendChild(p)
    coloursC.appendChild(div)
    hexValuesComp.unshift(x)
}



function CreateOfValueShade(x) {
    let h1 = document.createElement('h1')
    h1.textContent = "Shade:"
    let input = document.createElement('input')
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = "text"
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    shades.prepend(h1)
    div.appendChild(input)
    div.appendChild(p)
    coloursS.appendChild(div)
    hexValuesShade.unshift(x)
}

function CreateOfValueTint(x) {
    let h1 = document.createElement('h1')
    h1.textContent = "Tint:"
    let input = document.createElement('input')
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = "text"
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    tint.prepend(h1)
    div.appendChild(input)
    div.appendChild(p)
    coloursT.appendChild(div)
    hexValuesTint.unshift(x)
}

function CreateOfGradientTint(x) {
    let input = document.createElement('input')
    let p = document.createElement('p')
    let div = document.createElement('div')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = 'text'
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    div.appendChild(input)
    div.appendChild(p)
    coloursT.appendChild(div)
}

function CreateOfValueSunset(x) {
    let h1 = document.createElement('h1')
    h1.textContent = "Sunset:"
    let input = document.createElement('input')
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = "text"
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    sunset.prepend(h1)
    div.appendChild(input)
    div.appendChild(p)
    coloursSU.appendChild(div)
    hexValuesSunset.unshift(x)
}

//#endregion

//#region CreateOfGradient

function CreateOfGradientSunset(x) {
    let input = document.createElement('input')
    let p = document.createElement('p')
    let div = document.createElement('div')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = 'text'
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    div.appendChild(input)
    div.appendChild(p)
    coloursSU.appendChild(div)
}

function CreateOfGradientMono(x) {
    let input = document.createElement('input')
    let p = document.createElement('p')
    let div = document.createElement('div')
    p.textContent = "#" + x
    p.style.marginLeft = '20%'
    input.type = "text"
    input.disabled = true
    input.style.backgroundColor = "#" + x
    input.className = 'created'
    div.appendChild(input)
    div.appendChild(p)
    coloursM.appendChild(div)
}

function CreateOfGradientAna(x) {
    let input = document.createElement('input')
    let p = document.createElement('p')
    let div = document.createElement('div')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = 'text'
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    div.appendChild(input)
    div.appendChild(p)
    coloursA.appendChild(div)
}

function CreateOfGradientComp(x) {
    let input = document.createElement('input')
    let p = document.createElement('p')
    let div = document.createElement('div')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = 'text'
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    div.appendChild(input)
    div.appendChild(p)
    coloursC.appendChild(div)
}

function CreateOfGradientShade(x) {
    let input = document.createElement('input')
    let p = document.createElement('p')
    let div = document.createElement('div')
    p.textContent = x
    p.style.marginLeft = '20%'
    input.type = 'text'
    input.disabled = true
    input.style.backgroundColor = x
    input.className = 'created'
    div.appendChild(input)
    div.appendChild(p)
    coloursS.appendChild(div)
}

//#endregion

//#region Housekeeping
function CreateGradient(a, arr) {
    const div = document.createElement("div")
    div.style.backgroundImage = "linear-gradient(to right, " + arr.join(", ") + ")"
    const heading = document.createElement("h2")
    heading.textContent = a
    const container = document.createElement("div")
    container.className = "gradient-box"
    div.className = "gradient-bar"
    container.appendChild(heading)
    container.appendChild(div)
    storeGradient.appendChild(container)
}

function checkAndCall(givenValue) {
    if (givenValue.length === 7 && givenValue.includes("#")) {
        hexValuesMono.length = 0
        hexValuesAna.length = 0
        hexValuesComp.length = 0
        hexValuesShade.length = 0
        hexValuesTint.length = 0
        hexValuesSunset.length = 0
        gradient = true
        const oldH1m = monochrome.querySelector('h1')
        const oldH1a = analogous.querySelector('h1')
        const oldH1c = complementary.querySelector('h1')
        const oldH1s = shades.querySelector('h1')
        const oldH1t = tint.querySelector('h1')
        const oldH1su = sunset.querySelector('h1')
        if (oldH1s) oldH1s.remove()
        if (oldH1t) oldH1t.remove()
        if (oldH1su) oldH1su.remove()
        if (oldH1c) oldH1c.remove()
        if (oldH1m) oldH1m.remove()
        if (oldH1a) oldH1a.remove()
        coloursM.innerHTML = ""
        coloursA.innerHTML = ""
        coloursC.innerHTML = ""
        coloursS.innerHTML = ""
        coloursT.innerHTML = ""
        coloursSU.innerHTML = ""
        storeGradient.innerHTML = ""
        CreateOfValueMono(givenValue)
        gradientClassy(givenValue)
        CreateOfValueAna(givenValue)
        gradientNatural(givenValue)
        CreateOfValueComp(givenValue)
        gradientPop(givenValue)
        CreateOfValueShade(givenValue)
        gradientShade(givenValue)
        CreateOfValueTint(givenValue)
        gradientTint(givenValue)
        CreateOfValueSunset(givenValue)
        gradientSunset(givenValue)
        CreateGradient("Monochromatic:", hexValuesMono)
        CreateGradient("Analogous:", hexValuesAna)
        CreateGradient("Complementary:", hexValuesComp)
        CreateGradient("Shades:", hexValuesShade)
        CreateGradient("Tint:", hexValuesTint)
        CreateGradient("Sunset:", hexValuesSunset)
    }
}

window.addEventListener("keydown", (e) => {
    const input = document.getElementById("searchBar")
    if (e.code === "Space" && !input.focus()) {
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

//#endregion
