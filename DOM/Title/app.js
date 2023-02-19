document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#setTitle')
    const title = document.querySelector('#title')

        input.addEventListener('change', () => {
           setTimeout(() =>  {
                title.textContent = input.value
           }, 300)
        })
  
})