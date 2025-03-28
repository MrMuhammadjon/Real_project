

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
        image: "blinchiki.jpg",
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
        image: "milk.jpg",
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
        image: "kolbasa.jpg",
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
        image: "kolbasa2.jpg",
        category: "Новинки",
        rating: 4.8,
        inStock: true
    },
    {
        id: 5,
        name: "Молоко ПРОСТОКВАШИНО",
        price: 49.39,
        paycart: null,
        discount: null,
        image: "milk.jpg",
        category: "Покупали раньше",
        rating: 4.6,
        inStock: true
    },
    {
        id: 6,
        name: "Колбаса КЗС-121В «СЕНА-ПОЛЕСЬЕ» GS12",
        price: 159.99,
        paycart: null,
        discount: null,
        image: "kolbasa3.jpg",
        category: "Новинки",
        rating: 4.5,
        inStock: true
    }
];



let catalog = document.getElementById("catalog-content")
console.log(catalog);

let a ='salom'
console.log(a);


renderProducts(products)

function renderProducts(products) {
    catalog.innerHTML = ""
    products.map((products) => {
        catalog.innerHTML += `
                        <div class="product">
                    <div class="product-head">
                        <div class="product-img">
                            <img src="${products.image}" alt="">
                        </div>
                        <span>
                            <i class='bx bx-heart'></i>
                        </span>
                        <div class="discount">
                            <h1>${products.discount}</h1>
                        </div>
                    </div>
                    <div class="product-main">
                        <div class="product-price">
                            <div class="With-map">
                                <h1>${products.price}$</h1>
                                <p>С картой</p>
                            </div>
                            <div class="Regular">
                                <h1>${products.discount}$</h1>
                                <p>Без карты</p>
                            </div>
                        </div>
                        <div class="product-name">
                            <p>
                                ${products.name}
                            </p>
                        </div>
                        <div class="product-rating">
                            <span>
                                ⭐⭐⭐⭐
                            </span>
                            <!-- <p>
                                4.5 (1000 отзывов)
                            </p> -->
                        </div>
                        <button class="add-product-basket__btn" id="add-product-basket">
                            <i class='bx bx-shopping-bag'></i>
                            В корзину
                        </button>
                    </div>
                </div>
        `
    })
}

