

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
                    <span>
                        <i class='bx bx-heart'></i>
                    </span>
                    <div class="discount">
                        <h1>${products1.discount}%</h1>
                    </div>
                </div>
                <div class="product-main">
                    <div class="product-price">
                        <div class="With-map">
                            <h1>${products1.price}$</h1>
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
            </div>
            `
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
                    <span>
                        <i class='bx bx-heart'></i>
                    </span>
                    <div class="discount">
                        <h1>${products2.discount}%</h1>
                    </div>
                </div>
                <div class="product-main">
                    <div class="product-price">
                        <div class="With-map">
                            <h1>${products2.price}$</h1>
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
                      <span>
                          <i class='bx bx-heart'></i>
                      </span>
                      <div class="discount">
                          <h1>${products3.discount}%</h1>
                      </div>
                  </div>
                  <div class="product-main">
                      <div class="product-price">
                          <div class="With-map">
                              <h1>${products3.price}$</h1>
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



let olibbolinganItem = []

let getProductBtn = document.querySelectorAll(".add-product-basket__btn");


getProductBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let productName = btn.parentElement.querySelector(".product-name p").innerHTML
        let productPrice = btn.parentElement.querySelector(".With-map h1").innerHTML
        let productImg = btn.parentElement.parentElement.querySelector(".product-img img").src
        let productRating = btn.parentElement.querySelector(".product-rating span").innerHTML

        olibbolinganItem.push({
            name: productName,
            src: productImg,
            price:  productPrice,
            rating: productRating
        })

        
        
    })
})

console.log(olibbolinganItem);




// let olibbolinganItem = []; // Massivni funktsiyadan oldin e'lon qilish kerak

// let getProductBtn = document.querySelectorAll(".add-product-basket__btn");

// getProductBtn.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         let productName = btn.parentElement.querySelector(".product-name p").innerHTML;
//         let productPrice = btn.parentElement.querySelector(".with-map h1"); 
//         let productImg = btn.parentElement.parentElement.querySelector(".product-img img").src;
//         let productRating = btn.parentElement.querySelector(".product-rating span");

//         // Obyekt sifatida saqlash yaxshiroq
//         olibbolinganItem.push({
//             name: productName,
//             price: productPrice,
//             image: productImg,
//             rating: productRating
//         });

//         console.log(olibbolinganItem);
//     });
// });

