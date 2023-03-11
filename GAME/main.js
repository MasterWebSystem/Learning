

let overlay = document.querySelector('.overlay')
let startModal = document.querySelector('.start')
let body = document.querySelector('body')

let input = document.querySelector('input')
let btn = document.querySelector('.btn')


body.style.overflow = 'hidden'




btn.addEventListener('click', () => {

    let cardCount = 0
    let cardNumbers = []
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
            setInterval(timer)
        }

       
    }, 1000)

  



    if (!input.value) {
        return
    } 

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
       
        }
    }

    // Render
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

for (let i = 1; i <= cardCount / 2; i++) {
    cardNumbers.push(i)
    cardNumbers.push(i)
}



 cardNumbers = cardNumbers.sort(() => Math.random() - 0.5)


for (const cardNumber of cardNumbers){
     card(document.querySelector('#cards'), cardNumber, flip)
}

    overlay.style.display = 'none'
    startModal.style.display = 'none'
    body.style.overflow = 'scroll'
})










