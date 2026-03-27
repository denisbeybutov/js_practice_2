//создаем массив пользователей и счетчик для id опльзователя
const allUsers = [];
let idUsers = 1;

//создаем объект для каждого пользователя
const userIvan = {
    id: idUsers++,
    name: "Иван",
    email: "ivan@gmail.com"
};
const userMax = {
    id: idUsers++,
    name: "Макс",
    email: "max@gmail.com"
};
const userDen = {
    id: idUsers++,
    name: "Ден",
    email: "den@gmail.com"
};

//добавляем объекты в массив пользователей
allUsers.push(userIvan, userMax, userDen);
//выводим в консоль массив пользователей
console.log(allUsers);

//ункция поиска пользователя по id
function findUserById (users, id) {
    let needUser 
    needUser = users.find(function(user){
        return user.id === id
    });
    if (needUser === undefined) {
        console.log('Нет пользователя')
        return null
    }
    else return needUser
    
};

//выводим результат поиска разных пользователей по id
console.log(findUserById(allUsers, 1))
console.log(findUserById(allUsers, 2))
console.log(findUserById(allUsers, 3))
console.log(findUserById(allUsers, 4))
console.log(findUserById(allUsers, 10))
