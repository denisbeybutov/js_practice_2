//создаем продукты
const product1 = {
    name: 'phone',
    price: 100,
    category: 'mobile',
}
const product2 = {
    name: 'laptop',
    price: 200,
    category: 'computers',
}
const product3 = {
    name: 'headphones',
    price: 50,
    category: 'music',
}
const product4 = {
    name: 'desktop',
    price: 300,
    category: 'computers',
}

//добавляем их в массив
const arrProducts = [
    product1,
    product2,
    product3,
    product4
]

//добавляем еще один продукт в массив
const product5 = {
    name: 'block',
    price: 350,
    category: 'computers',
}
arrProducts.push(product5)


// функция по подсчету общей суммы товаров в категории 
function getTotalPriceByCategory(category) {
    let sum = 0;
    arrProducts.forEach(function(prod){
        if (prod.category === category) sum+=prod.price
    })
    return sum
}

//вызываем функцию и выводим в консоль сумму
let sumPrices = getTotalPriceByCategory('computers')
console.log('Сумма всех товаров категории ', sumPrices)