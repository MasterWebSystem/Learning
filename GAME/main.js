


    // Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

    let numbersArray = []
    
    let input = document.querySelector('#v-a')
    let btn = document.querySelector('.btn')

    let overlay = document.querySelector('.overlay')
    let startModal = document.querySelector('.start')
    let body = document.querySelector('body')



    let response = 0


   


    function createNumbersArray(count) {
    

        for (let i = 1; i <= count / 2; i++) {
            numbersArray.push(i)
            numbersArray.push(i)
        }    
    }

    // Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

    function shuffle(arr) {
        arr.sort(() => Math.random() - 0.5)

        return arr
    }

    // Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

    function startGame(numbers) {
    

        createNumbersArray(numbers)
       
        shuffle(numbersArray)

        body.style.overflow = 'hidden'


        

        btn.addEventListener('click', () => {


            if (!input.value) {
                return
            }

            let cardCount = 0
            let firstCard = null
            let secondCard = null
            let count = 61
            let timer_value = document.querySelector('.timer')

            
            let timer = setInterval(() => {

                count--

                timer_value.textContent = count + ' ' + 'секунд осталось'

                if (count <= 10) {
                    timer_value.classList.add('--timer-red-color')
                }

                if (count <= 0) {
                    window.location.reload()
                    clearInterval(timer)
                }

            
            }, 1000)

           

            if (Number(input.value) <= 10 && Number(input.value) >= 2) {
                cardCount = Number(input.value)
            } else {
                cardCount = 4
            }


            function flip (card) {
                if (firstCard !== null && secondCard !== null) {
                    if (Number(firstCard.textContent) !== Number(secondCard.textContent)) {
                        firstCard.classList.remove('success')
                        secondCard.classList.remove('success')
                        firstCard.classList.remove('open')
                        secondCard.classList.remove('open')
                        firstCard = null
                        secondCard = null
                    }
                }
            
                if (firstCard === null) {
                    firstCard = card
                } else {
                    if (secondCard === null) {
                        secondCard = card
                    }
                } 
            
                if (firstCard !== null && secondCard !== null) {
                    if (Number(firstCard.textContent) === Number(secondCard.textContent)) {
                        firstCard.classList.add('success')
                        firstCard.classList.add('open')
                        secondCard.classList.add('open')
                        secondCard.classList.add('success')
                        firstCard = null
                        secondCard = null
                    }
                }

                // конец игры
            
                if (document.querySelectorAll('.card.success').length === cardNumbers.length) {
                    let count = 6;
                    let overlay = document.querySelector('.overlay')
                    let endModal = document.querySelector('.end')
                    let body = document.querySelector('body')
            
                    let span = document.querySelector('.timer-end')
            
                    overlay.style.display = 'block'
                    endModal.style.display = 'block'
                    body.style.overflow = 'hidden'
            
                    let interval = setInterval(() => {
                        count--
            
                        if (count === 5) {
                            span.textContent = 'Осталось' + ' ' + count + ' ' + 'секунд...'
                        } else if (count < 5 && count > 1) {
                            span.textContent = 'Осталось' + ' ' + count + ' ' + 'секунды...'
                        } else {
                            span.textContent = 'Осталось' + ' ' + count + ' ' + 'секунда...'
                        }
            
                        if (count <= 0) {
                            window.location.reload()
                            clearInterval(interval)
                        }
            
                    
                    }, 1000)

                    if (endModal.style.display == 'block') {
                        clearInterval(timer)
                    }
            
                }
            }

        function card(container, number, action) {
            let card = document.createElement('div')
            card.classList.add('card')
            card.textContent = number

            card.addEventListener('click', () => {
                card.classList.add('open')
                action(card)
            })


            container.append(card)
        }




        let cardNumbers = shuffle(numbersArray)


        for (const cardNumber of cardNumbers){
            card(document.querySelector('#cards'), cardNumber, flip)
        }

            overlay.style.display = 'none'
            startModal.style.display = 'none'
            body.style.overflow = 'scroll'
        }) 
    }



  input.addEventListener('change', () => {
    response = Number(input.value)
    startGame(response)
})


 









 




    

    

   
  



  
   