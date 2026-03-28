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
const product5 = {
    name: 'block',
    price: 350,
    category: 'computers',
}
const product6 = {
    name: 'case',
    price: 10,
    category: 'mobile',
}


//добавляем их в массив
const arrProducts = []
arrProducts.push(product1, product2, product3, product4,product5, product6)


// функция по подсчету общей суммы товаров в категории 
function getTotalPriceByCategory(category) {
    let sum = 0;
    document.querySelector('.answer').innerHTML += `Товары из категории ${category} <br>`
    arrProducts.forEach(function(prod){
        if (prod.category === category) {
            sum+=prod.price
            document.querySelector('.answer').innerHTML += `Товар ${prod.name} `
            document.querySelector('.answer').innerHTML += `Цена ${prod.price} <br>`
        }
    })
    return sum
}


//функция вывода товаров из передаваемой категории и их суммы
function showSumOfProductsInCategory(category) {
    let sumPricesCategory = getTotalPriceByCategory(category)
    document.querySelector('.answer').innerHTML += `Сумма всех товаров категории ${category}: ${sumPricesCategory} <br><br>`
}

//вызов функции для разных категорий
showSumOfProductsInCategory('computers')
showSumOfProductsInCategory('mobile')
showSumOfProductsInCategory('music')