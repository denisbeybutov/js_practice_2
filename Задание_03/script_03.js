//создаем масив объектов книг
const allBooks = [
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        genres: ['роман','мистика','сатира'],
        isRead: true,
    },
    {
        title: "1984",
        author: "джордж Оруэлл",
        genres: ['антиутопия','политическая фантастика','социальная драма'],
        isRead: true,
    },
    {
        title: "451 по Фаренгейту",
        author: "Рэй Брэдбери",
        genres: ['антиутопия','социальная драма','научная фантастика'],
        isRead: false,
    },
    {
        title: "Солярис",
        author: "Станислав Лем",
        genres: ['научная фантастика','психологическая проза','космическая фантастика'],
        isRead: false,
    },
    {
        title: "Гордость и предубеждение",
        author: "Джейн Остен",
        genres: ['роман', 'социально-психологический роман'],
        isRead: false,
    }
]

console.log(allBooks)

//описываем функцию которая возвращает массив книг по введенному жанру и выводит их названия
function getBooksByGenre(genre) {
    let genreBooks = []
    allBooks.forEach(function(book){
        
        for(let g of book.genres) {
            
            if (g === genre) {
                genreBooks.push(book)
                console.log(book.title)
            }
        } 
        
    })
    return genreBooks
}

//вызываем функцию с разными жанрами и выводим массивы
let romans = getBooksByGenre('роман')
console.log('Романы: ', romans)
let antiutopia = getBooksByGenre('антиутопия')
console.log('Антиутопии: ',antiutopia)
let fantastic = getBooksByGenre('научная фантастика')
console.log('Научная фантастика', fantastic)

console.log('-----------------')

let markAsRead = (titleOfBook) => {
    allBooks.find(function(book){
        return book.title === titleOfBook
    }).isRead = true
}

//вызываем функцию по нажатию на кнопку и проверяем изменение
document.querySelector('.button').addEventListener('click', function(){
    markAsRead("Гордость и предубеждение")
    console.log('Сейчас книга "Гордость и предубеждение" прочитана',allBooks)
})



