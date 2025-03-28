

// (Mahsulot tafsilotlari uchun)

const products = [
    {
        id: 1,
        name: "ГП Блинчики с мясом вес",
        price: 44.50,
        oldPrice: 50.50,
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
        oldPrice: 50.50,
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
        oldPrice: 50.50,
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
        oldPrice: null,
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
        oldPrice: null,
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
        oldPrice: null,
        discount: null,
        image: "kolbasa3.jpg",
        category: "Новинки",
        rating: 4.5,
        inStock: true
    }
];

// export default products

export default products;

// Mahsulotlarni kategoriya bo‘yicha ajratish
const categories = {
    "Акции": products.filter(product => product.category === "Акции"),
    "Новинки": products.filter(product => product.category === "Новинки"),
    "Покупали раньше": products.filter(product => product.category === "Покупали раньше")
};

console.log(categories);
