

// (Asosiy JavaScript fayli)



import products1 from "./product.js";



const aksiiProducts = products1.filter(product => product.category === "Акции");
const novinkiProducts = products1.filter(product => product.category === "Новинки");
const pokupaliProducts = products1.filter(product => product.category === "Покупали раньше");


let catalog = document.getElementById("catalog-content")
let NewItemCatalog = document.getElementById("New-items-catalog")
let PurchasedBeforeCatalog = document.getElementById("Purchased-before-catalog")


function renderProducts(products1, products2, products3) {

    // 
    catalog.innerHTML = "";

    const updatedProducts1 = products1.map(product => ({
        ...product,
        paycart: product.paycart ?? " ",
        discount: product.discount ?? 0,

    }));

    updatedProducts1.map((products1) => {
        return (
            catalog.innerHTML += `
              <div class="product">
                  <div class="product-head">
                      <div class="product-img">
                          <img src="${products1.image}" alt="">
                      </div>
                      <span class="bx-heart-1">
                          <i class='bx bx-heart'></i>
                      </span>
                      <div class="discount">
                          <h1>${products1.discount}%</h1>
                      </div>
                  </div>
                  <div class="product-main">
                      <div class="product-price">
                          <div class="with-map">
                              <div class="With-map-in"><h1>${products1.price}</h1><sapn>$</sapn></div>
                              <p>С картой</p>
                          </div>
                          <div class="Regular">
                              <h1>${products1.paycart}$</h1>
                              <p>Без карты</p>
                          </div>
                      </div>
                      <div class="product-name">
                          <p>
                              ${products1.name}
                          </p>
                      </div>
                      <div class="product-rating">
                          <span>
                              ⭐[ ${products1.rating} ]
                          </span>
                      </div>
                      <button class="add-product-basket__btn" id="add-product-basket">
                          <i class='bx bx-shopping-bag'></i>
                          В корзину
                      </button>
                  </div>
              </div>`
        )
    })


    // 

    NewItemCatalog.innerHTML = "";

    const updatedProducts2 = products2.map(product => ({
        ...product,
        paycart: product.paycart ?? " ",
        discount: product.discount ?? 0,
    }));

    updatedProducts2.map((products2) => {
        return (
            NewItemCatalog.innerHTML += `
              <div class="product">
                  <div class="product-head">
                      <div class="product-img">
                          <img src="${products2.image}" alt="">
                      </div>
                      <span class="bx-heart-1">
                          <i class='bx bx-heart'></i>
                      </span>
                      <div class="discount">
                          <h1>${products2.discount}%</h1>
                      </div>
                  </div>
                  <div class="product-main">
                      <div class="product-price">
                          <div class="with-map">
                              <div class="With-map-in"><h1>${products2.price}</h1><sapn>$</sapn></div>
                              <p>С картой</p>
                          </div>
                          <div class="Regular">
                              <h1>${products2.paycart}$</h1>
                              <p>Без карты</p>
                          </div>
                      </div>
                      <div class="product-name">
                          <p>
                              ${products2.name}
                          </p>
                      </div>
                      <div class="product-rating">
                          <span>
                              ⭐[ ${products2.rating} ]
                          </span>
                      </div>
                      <button class="add-product-basket__btn" id="add-product-basket">
                          <i class='bx bx-shopping-bag'></i>
                          В корзину
                      </button>
                  </div>
              </div>`
        )
    })


    //   
    PurchasedBeforeCatalog.innerHTML = "";

    const updatedProducts3 = products3.map(product => ({
        ...product,
        paycart: product.paycart ?? " ",
        discount: product.discount ?? 0,
    }));

    updatedProducts3.map((products3) => {
        return (
            PurchasedBeforeCatalog.innerHTML += `
              <div class="product">
                  <div class="product-head">
                      <div class="product-img">
                          <img src="${products3.image}" alt="">
                      </div>
                      <span class="bx-heart-1">
                          <i class='bx bx-heart'></i>
                      </span>
                      <div class="discount">
                          <h1>${products3.discount}%</h1>
                      </div>
                  </div>
                  <div class="product-main">
                      <div class="product-price">
                          <div class="with-map">
                              <div class="With-map-in"><h1>${products3.price}</h1><sapn>$</sapn></div>
                              <p>С картой</p>
                          </div>
                          <div class="Regular">
                              <h1>${products3.paycart}$</h1>
                              <p>Без карты</p>
                          </div>
                      </div>
                      <div class="product-name">
                          <p>
                              ${products3.name}
                          </p>
                      </div>
                      <div class="product-rating">
                          <span>
                              ⭐[ ${products3.rating} ]
                          </span>
                      </div>
                      <button class="add-product-basket__btn" id="add-product-basket">
                          <i class='bx bx-shopping-bag'></i>
                          В корзину
                      </button>
                  </div>
              </div>`
        )
    })



}

renderProducts(aksiiProducts, novinkiProducts, pokupaliProducts);



let getProductBtn = document.querySelectorAll(".add-product-basket__btn");
let basketCount = document.getElementById("basket-count")
let heartCount = document.getElementById("sort-count")


let Zbasket = localStorage.getItem("counterBasket") 
    ? parseInt(localStorage.getItem("counterBasket")) 
    : 0;

let olibbolinganItem = localStorage.getItem("basketItems")
    ? JSON.parse(localStorage.getItem("basketItems"))
    : [];

basketCount.innerText = Zbasket; // Sahifa yuklanganda savatchani yangilash

getProductBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let productName = btn.parentElement.querySelector(".product-name p").innerHTML;
        let productPrice = btn.parentElement.querySelector(".With-map-in h1").innerHTML;
        let productImg = btn.parentElement.parentElement.querySelector(".product-img img").src;
        let productRating = btn.parentElement.querySelector(".product-rating span").innerHTML;

        Zbasket++;
        basketCount.innerText = Zbasket;
        localStorage.setItem("counterBasket", Zbasket);

        // Obyektni olibbolinganItem ga qo‘shish
        olibbolinganItem.push({
            name: productName,
            price: productPrice,
            image: productImg,
            rating: productRating,
        });

        // Mahsulotlarni localStorage ga saqlash
        localStorage.setItem("basketItems", JSON.stringify(olibbolinganItem));
    });
});



// LocalStorage'dan yuraklar sonini olish
let Zheart = localStorage.getItem("countSortProducts")
    ? parseInt(localStorage.getItem("countSortProducts"))
    : 0;

heartCount.innerText = Zheart; // Sahifa yangilanganda yuraklar sonini chiqarish

// Yurakcha tugmalarini olish
let getProductHeart = document.querySelectorAll(".bx-heart-1")


// LocalStorage'dan oldingi holatni olish
let heartStates = localStorage.getItem("heartStates")
    ? JSON.parse(localStorage.getItem("heartStates"))
    : Array(getProductHeart.length).fill(false);

getProductHeart.forEach((btn, index) => {
    // Agar oldin bosilgan bo'lsa, rangini o'zgartirish
    if (heartStates[index]) {
        btn.style.backgroundColor = "#70C05B";
    } else {
        btn.style.backgroundColor = "#8F8F8F";
    }

    btn.addEventListener("click", () => {
        if (!heartStates[index]) {
            Zheart++;
            heartStates[index] = true;
            btn.style.backgroundColor = "#70C05B";
        } else {
            Zheart--;
            heartStates[index] = false;
            btn.style.backgroundColor = "#8F8F8F";
        }

        // Yuraklar sonini yangilash
        heartCount.innerText = Zheart;

        // Ma'lumotlarni LocalStorage'ga saqlash
        localStorage.setItem("countSortProducts", Zheart);
        localStorage.setItem("heartStates", JSON.stringify(heartStates));

        console.log("Yuraklar soni:", Zheart);
    });
});

