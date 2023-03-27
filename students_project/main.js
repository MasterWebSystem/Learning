// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).
    let studenstTableBody = document.querySelector('.students-table__body')

// 1.1 Сортировка

let filterInp = document.querySelector('#filter')



// 1.2 Добавить студента

let btnPanel = document.querySelector('.students-table__btn')
let modalForm = document.querySelector('.modal-form__container')
let overlay = document.querySelector('.overlay')
let studenstTable = document.querySelector('.students-table')

btnPanel.addEventListener('click', () => {
    studenstTable.style.display = 'none'
    overlay.style.display = 'block'
    modalForm.style.display = 'flex'
})

overlay.addEventListener('click', () => {
    studenstTable.style.display = 'block'
    modalForm.style.display = 'none'
    overlay.style.display = 'none'
})

// 1.3 Маска на JQuery 

$('#birthDate').mask('99.99.9999')
$('#learnYears').mask('c 9999 до 9999')









// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [
    // Добавьте сюда объекты студентов

    {
        lastname: 'Люлько',
        name: 'Максим',
        surname: 'Викторович',
        faculty: 'Веб-разработка',
        birth_date: '15.07.2005',
        learn_years: '2022-2026'

    },

    {
        lastname: 'Самохина',
        name: 'Ульяна',
        surname: 'Марковна',
        faculty: 'Банковское дело',
        birth_date: '07.06.2007',
        learn_years: '2023-2027'

    },

    {
        lastname: 'Громова',
        name: 'Екатерина',
        surname: 'Александровна',
        faculty: 'Парикмахерское исскутсво',
        birth_date: '16.02.2005',
        learn_years: '2023-2027'

    },

    {
        lastname: 'Дьякова',
        name: 'Анастасия',
        surname: 'Сергеевна',
        faculty: 'Математические науки и психология',
        birth_date: '07.04.2007',
        learn_years: '2023-2027'

    },

    {
        lastname: 'Коломин',
        name: 'Никита',
        surname: 'Игорович',
        faculty: 'Наука и исскуство',
        birth_date: '24.07.2007',
        learn_years: '2022-2026'
    }
]

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {
    studentObj.fio = studentObj.lastname + ' ' + studentObj.name + ' ' + studentObj.surname

  

    let studentStroke = document.createElement('div')
        studentStroke.classList.add('students-table__stroke')
    let studentsList = document.createElement('div')
        studentsList.classList.add('students-table__list')
    let studentItemFIO = document.createElement('div')
        studentItemFIO.classList.add('students-table__item')
    let studentItemFacult = document.createElement('div')
        studentItemFacult.classList.add('students-table__item')
    let studentItemBirth = document.createElement('div')
        studentItemBirth.classList.add('students-table__item')
    let studentItemYears = document.createElement('div')
        studentItemYears.classList.add('students-table__item')

        

        studentItemFIO.textContent = studentObj.fio
        studentItemFacult.textContent = studentObj.faculty
        studentItemBirth.textContent = studentObj.birth_date
        studentItemYears.textContent = studentObj.learn_years

        let birthText = studentItemBirth.textContent
        let YearBirthText = birthText[6] + birthText[7] + birthText[8] + birthText[9]
        let YearBirth = parseInt(YearBirthText)

        let currentDate = new Date()
        let currentYear = new Date().getFullYear()
        let birthDate = `${currentYear}-${studentObj.birth_date[3] + studentObj.birth_date[4]}-${studentObj.birth_date[0] + studentObj.birth_date[1]}`

        let age = ''

        if (currentDate > birthDate) {
            age = currentYear - YearBirth
        } else {
            
            age = (currentYear - YearBirth) - 1
        }

        studentItemBirth.textContent = `${studentObj.birth_date} (${age})`

        let yearLearnBegin = studentItemYears.textContent[0] + studentItemYears.textContent[1] + studentItemYears.textContent[2] + studentItemYears.textContent[3]

        let yearLearnEnd = studentItemYears.textContent[5] + studentItemYears.textContent[6] + studentItemYears.textContent[7] + studentItemYears.textContent[8]

        let course = ''

        if (currentYear - yearLearnBegin == 0) {
            course += 1
        }  else {

            if (currentYear > yearLearnEnd) {
                course = 'закончил'
            } else {
                course += (currentYear - yearLearnBegin) + 1
            }


        }




        

        studentItemYears.textContent = `${studentObj.learn_years}(${course})`

    studenstTableBody.append(studentStroke)
    studentStroke.append(studentsList)
    studentsList.append(studentItemFIO)
    studentsList.append(studentItemFacult)
    studentsList.append(studentItemBirth)
    studentsList.append(studentItemYears)
    
}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {
    studenstTableBody.innerHTML = ''
    let copyStudentsList = [...studentsArray]

    let options = document.querySelectorAll('.--table-header')




    
  
   

    options[0].addEventListener('click', () => {
        sortStudentsListFIO(copyStudentsList)

      

       studenstTableBody.innerHTML = ''
       renderStudentsTable(copyStudentsList)
    })

    options[1].addEventListener('click', () => {
        sortStudentsListFaculty(copyStudentsList)
 
   
 
        studenstTableBody.innerHTML = ''
        renderStudentsTable(copyStudentsList)
     })

     options[2].addEventListener('click', () => {
        sortStudentsListDateBirth(copyStudentsList)
 
 
        studenstTableBody.innerHTML = ''
        renderStudentsTable(copyStudentsList)
     })

     options[3].addEventListener('click', () => {
        sortStudentsListLearnYears(copyStudentsList)
 
     
 
        studenstTableBody.innerHTML = ''
        renderStudentsTable(copyStudentsList)
     })


   

    copyStudentsList.forEach(student => {
        getStudentItem(student)
    });

   
}

renderStudentsTable(studentsList)

filterInp.addEventListener('input', () => {
    let copyStudentsList = [...studentsList]

    copyStudentsList = copyStudentsList.filter(student => {
        if (student.lastname.includes(filter.value) || student.name.includes(filter.value) || student.surname.includes(filter.value) || student.faculty.includes(filter.value) || student.birth_date.includes(filter.value) || student.learn_years.includes(filter.value)) {
            return true
        }
    })

    renderStudentsTable(copyStudentsList)

})



// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.
    let form = document.querySelector('.modal-form__form')
    let formInputs = document.querySelectorAll('.modal-form__input')
    let birthDate = document.querySelector('#birthDate')
    let learnYears = document.querySelector('#learnYears')
    let errorRender = document.querySelector('.error')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        
    // 5.1 Валидация


    for (const formInput of formInputs) {
        let error = ''
     

        if (!formInput.value) {
            formInput.style.border = '1px solid red'
            if (formInput.getAttribute('name') == 'lastname') {
                error = 'Поле с фамилией не должно быть пустым'
                errorRender.textContent = error
                return
            }

            if (formInput.getAttribute('name') == 'name') {
                error = 'Поле с именем не должно быть пустым'
                errorRender.textContent = error
                return
            }

            if (formInput.getAttribute('name') == 'surname') {
                error = 'Поле с отчеством не должно быть пустым'
                errorRender.textContent = error
                return
            }


            if (formInput.getAttribute('name') == 'faculty') {
                error = 'Поле с факультетом не должно быть пустым'
                errorRender.textContent = error
                return
            }

            if (formInput.getAttribute('name') == 'birthdate') {
                error = 'Поле с датой рождения не должно быть пустым'
                errorRender.textContent = error
                return
            }

            if (formInput.getAttribute('name') == 'learndate') {
                error = 'Поле с учебными годами не должно быть пустым'
                errorRender.textContent = error
                return
            }
        }

        if (birthDate.value) {
            let date = birthDate.value
            let currentYear = date[6] + date[7] + date[8] + date[9]
            
            if (parseInt(currentYear) < 1900) {
                birthDate.style.border = '1px solid red'
                error = 'Неккоректная дата рождения'
                errorRender.textContent = error
                return
            }
        }

        if (learnYears.value) {
            let date = learnYears.value
            let currentYear = date[2] + date[3] + date[4] + date[5]
            
            if (parseInt(currentYear) < 2000) {
                learnYears.style.border = '1px solid red'
                error = 'Неккоретно ввиден  начало года обучения(с 2000)'
                errorRender.textContent = error
                return
            }
        }

       
    }

    studentsList.push({
        lastname: formInputs[0].value,
        name: formInputs[1].value,
        surname: formInputs[2].value,
        faculty: formInputs[3].value,
        birth_date: formInputs[4].value,
        learn_years: formInputs[5].value[2] + formInputs[5].value[3] + formInputs[5].value[4] + formInputs[5].value[5] + '-' + formInputs[5].value[10] + formInputs[5].value[11] + formInputs[5].value[12] + formInputs[5].value[13]
    })

    studenstTableBody.innerHTML = ''
    
    renderStudentsTable(studentsList)



    overlay.style.display = 'none'
    modalForm.style.display = 'none'
    studenstTable.style.display = 'block'
    
   

})
    for (const formInput of formInputs) {

        formInput.addEventListener('input', () => {
            errorRender.textContent = ''
            formInput.style.border = '1px solid #000'
        }) 
    }

    birthDate.addEventListener('focus', () => {
        errorRender.textContent = ''
        birthDate.style.border = '1px solid #000'
    }) 

    learnYears.addEventListener('focus', () => {
        errorRender.textContent = ''
        learnYears.style.border = '1px solid #000'
    })


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.




    function sortStudentsListFIO(arr) {
        arr = arr.sort((a, b) => {
            if (a.fio < b.fio) {
                return -1
            }
        })

        return arr
    }

    function sortStudentsListFaculty(arr) {
        arr = arr.sort((a, b) => {
            if (a.faculty < b.faculty) {
                    return -1
            }
        })

        return arr
    }

    function sortStudentsListDateBirth(arr) {
        arr = arr.sort((a, b) => {
            let year = a.birth_date[6] + a.birth_date[7] + a.birth_date[8] + a.birth_date[9]
            let year2 = b.birth_date[6] + b.birth_date[7] + b.birth_date[8] + b.birth_date[9]
            
            if (parseInt(year) < parseInt(year2)) {
                    return -1
            }
    
        })

        return arr
    }

    
    function sortStudentsListLearnYears(arr) {
        arr = arr.sort((a, b) => {
            let one = a.learn_years[0] + a.learn_years[1] + a.learn_years[2] + a.learn_years[3]
            let second = b.learn_years[0] + b.learn_years[1] + b.learn_years[2] + b.learn_years[3]

        
            if (parseInt(one) < parseInt(second)) {
                    return -1
            }

        })

        return arr
    }


// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.

