
document.addEventListener('DOMContentLoaded', () => {
    let secondValue = document.querySelector('#seconds')
    let btn = document.querySelector('#btnTimer')
    let output = document.querySelector('#result')

    let seconds = 0
    let interval
    let click = 0

    output.innerHTML = seconds

    btn.addEventListener('click', () => {
        click++
        // ----------------Валидация-----------------
        if (!secondValue.value) {
            alert('Вы не ввели число')
            return
        }

        if (!parseInt(secondValue.value)) {
            alert('Вы можете вводить только числа')
            return
        }

        seconds = parseInt(secondValue.value)
        output.innerHTML = seconds
        
        interval = setInterval(Timer, 1000)

        if(secondValue.value) {
            seconds = parseInt(secondValue.value)
            output.innerHTML = seconds
            Timer()
          } else {
            Timer()
          }
    })

    function Timer() {

        if (parseInt(seconds) <= 0) {
            clearInterval(interval)
        } else if (click > 1)
        {
            clearInterval(interval)
            seconds--
            output.innerHTML = seconds
    
        } else {
            output.innerHTML = seconds
            seconds--
            
        }    
    }
})


