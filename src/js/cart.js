

// (Savat uchun alohida kodlar)

let openHIde = document.getElementById("open-hide-btn")
let styleHide = document.getElementById("Hide-catet")


let closedOpen = false
openHIde.addEventListener('click', () => {

    if (!closedOpen) {
        styleHide.style.opacity = '1'
        closedOpen = true
    } else {
        styleHide.style.opacity = '0'
        closedOpen = false
    }

})