


let Zheart = localStorage.getItem("countSortProducts")
    ? parseInt(localStorage.getItem("countSortProducts"))
    : 0;


let catalogSort = document.getElementById('sort-count-cart')
catalogSort.innerHTML = Zheart


let Zbasket = localStorage.getItem("counterBasket")
    ? parseInt(localStorage.getItem("counterBasket"))
    : 0;


let catalogBasket = document.getElementById('basket-count-cart')
catalogBasket.innerText = Zbasket





