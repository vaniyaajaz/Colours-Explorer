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