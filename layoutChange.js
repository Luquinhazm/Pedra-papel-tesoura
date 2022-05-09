const btnPaper = document.getElementById('btnPaper')
const btnRock = document.getElementById('btnRock')
const btnScissors = document.getElementById('btnScissors')

const esconder = document.getElementById('hidden__mainPage')
const escolhaPage = document.getElementById('choosePage')

const rock = document.getElementById('pickedRock')
const paper = document.getElementById('pickedPaper')
const scissors = document.getElementById('pickedScissors')

btnPaper.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    paper.style.display = 'flex'
} )

btnRock.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    rock.style.display = 'flex'
} )

btnScissors.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    scissors.style.display = 'flex'
} )