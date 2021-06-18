let containerQuestion = document.querySelectorAll('.questions')
let openContainer = document.querySelectorAll('.toggle')

const res = () => {
    openContainer.forEach((btn, index) => {
        btn.addEventListener('click', (event) => {
            containerQuestion[index].classList.toggle('active')
        })
    })
}

res()