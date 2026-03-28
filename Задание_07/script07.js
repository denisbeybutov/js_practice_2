//описываем массив товаров
const products = [
  { name: "Phone", category: "Electronics" },
  { name: "TV", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "T-shirt", category: "Clothing" },
  { name: "Blender", category: "Home" }
];

//функция создания объекта подсчета товаров для каджой категории
function countByCategory(prod) {
  const objCounter = {};
  
  prod.forEach(function(item){
    // проходим по всему массиву с товарами и заполняем новый объект
    let key = item.category
    objCounter[key] = (objCounter[key] || 0) + 1 ;
  });

  return objCounter
 };

// создаем объект с подсчитанными категориями товаров и выводим вместе с массивом
let obj = countByCategory(products);
console.log('исходный массив и объект с кол-ом товаров по каждой категории')
console.log(products)
console.log('объект ',obj);

//добавляем в массив новый элемент
products.push({name: 'HH', category: 'Electronics'})

// снова создаем объект и выводим с массивом
let obj2 = countByCategory(products);
console.log('Дополненный массив и новый объект с кол-ом товаров по каждой категории')
console.log(products)
console.log('объект ',obj2);