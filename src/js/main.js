

// (Asosiy JavaScript fayli)



// import products from "./src/js/product.js";

// console.log(products);


const products = [
    {
        id: 1,
        name: "ГП Блинчики с мясом вес",
        price: 44.50,
        paycart: 50.50,
        discount: 50,
        image: "./public/img/product.img/image.png",
        category: "Акции",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Молоко ПРОСТОКВАШИНО",
        price: 44.50,
        paycart: 50.50,
        discount: 50,
        image: "./public/img/product.img/image (2).png",
        category: "Акции",
        rating: 4.7,
        inStock: true
    },
    {
        id: 3,
        name: "Колбаса сардельочная МЯСНАЯ ИСТОРИЯ",
        price: 44.50,
        paycart: 50.50,
        discount: 50,
        image: "./public/img/product.img/image (3).png",
        category: "Акции",
        rating: 4.2,
        inStock: true
    },
    {
        id: 4,
        name: "Колбаса КЗС-121В «СЕНА-ПОЛЕСЬЕ» GS12",
        price: 599.99,
        paycart: null,
        discount: null,
        image: "./public/img/product.img/image (4).png",
        category: "Новинки",
        rating: 4.8,
        inStock: true
    },
];

let catalog = document.getElementById("catalog-content")

function renderProducts(products) {
    catalog.innerHTML = ""; 

    products.forEach(product => {
        let discount = product.discount === null ? 0 : product.discount;
        
        let paycart = product.paycart === null ? product.price : product.paycart;

        let discountedPrice = discount > 0 ? (paycart * (1 - discount / 100)).toFixed(2) : paycart;

        catalog.innerHTML += `
            <div class="product">
                <div class="product-head">
                    <div class="product-img">
                        <img src="${product.image}" alt="">
                    </div>
                    <span>
                        <i class='bx bx-heart'></i>
                    </span>
                    <div class="discount">
                        <h1>${discount > 0 ? `-${discount}%` : ""}</h1>
                    </div>
                </div>
                <div class="product-main">
                    <div class="product-price">
                        <div class="With-map">
                            <h1>${discountedPrice}$</h1>
                            <p>С картой</p>
                        </div>
                        <div class="Regular">
                            <h1>${paycart}$</h1>
                            <p>Без карты</p>
                        </div>
                    </div>
                    <div class="product-name">
                        <p>
                            ${product.name}
                        </p>
                    </div>
                    <div class="product-rating">
                        <span>
                            ⭐⭐⭐⭐⭐
                        </span>
                    </div>
                    <button class="add-product-basket__btn" id="add-product-basket">
                        <i class='bx bx-shopping-bag'></i>
                        В корзину
                    </button>
                </div>
            </div>
        `;
    });
}

renderProducts(products);

