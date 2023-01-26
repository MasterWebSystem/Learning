
// -------------------------------Домашнее задание номер 2--------------------------------------------------


// -------------------------------Функция (фильтр) для фильтрации массива с объектами--------------------------------------------------

function filter(arr, prop, value) {
    let result = []; // Создаем пустой массив с будущим результатом

     // ----------------------Пробегаемся по каждому элементу массиву через цикл for(of)---------------------
    for (const item of arr) {
        // Если элемент массива(объект) у которого значение ключа которое мы проверяем верно,
        // то мы добавляем этот элемент в массив с новым результатом
        if (item[prop].includes(value) === true) {
            result.push(item); // Добавляем элемент массива(объект) с новым результатом
        }
    }

    return result; // Возвращаем получившийся результат

}
// ------------------------------Массив объектов 'users'------------------------------------------------
let users = [
    {
        name: 'Василий',
        surname: 'Васильев',
        iAdmin: true

    },
    {
        name: 'Иван Иванович',
        surname: 'Иванов',
        isAdmin: false

    },
    {
        name: 'Петр',
        surname: 'Петров',
        isAdmin: false

    }
];


// -----------------------------Пример объекта и работа с ним-------------------------------------------

// let user = {
//     name: 'Алексей',
//     surname: 'Водяницкий',
//     age: 35,
//     skills: ['HTML5', 'CSS3', 'JS'],
//     userAddress: {
//         city: 'Чехов'
//     }
// }


// user.name = 'Александр';
// user.skills[2] = 'ECMA6';

// user.userAddress['city'] = 'Санкт-Петербург';


 console.log(filter(users, 'isAdmin', 'true')); // Запуск нащей функции
