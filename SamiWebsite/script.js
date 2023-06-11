const hamburger = document.querySelector('.hamburger')
const overlay = document.getElementById('overlay')

hamburger.addEventListener('click', () => {

    overlay.classList.toggle('active')  
    overlay.classList.toggle('animation')

})


const list = Array.from(document.getElementsByClassName('list'))


list.forEach( (e) => {
    e.addEventListener('click', (item) => {
        overlay.classList.remove('active')
        overlay.classList.remove('animation')
    })
})