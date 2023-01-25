

function filter(arr, prop, value) {
    let result = [];

    for (const item of arr) {
        if (item[prop].includes(value) === true) {
            result.push(item);
        }
    }

    return result;

}

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


 console.log(filter(users, 'isAdmin', 'true'));
