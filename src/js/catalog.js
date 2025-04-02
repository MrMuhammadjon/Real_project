

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


let Zheart = localStorage.getItem("countSortProducts")
    ? parseInt(localStorage.getItem("countSortProducts"))
    : 0;


let catalogSort = document.getElementById('sort-count-catalog')
catalogSort.innerHTML = Zheart


let Zbasket = localStorage.getItem("counterBasket")
    ? parseInt(localStorage.getItem("counterBasket"))
    : 0;


let catalogBasket = document.getElementById('basket-count-catalog')
catalogBasket.innerText = Zbasket



