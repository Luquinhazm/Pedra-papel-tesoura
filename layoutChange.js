const btnPaper = document.getElementById('btnPaper')
const btnRock = document.getElementById('btnRock')
const btnScissors = document.getElementById('btnScissors')

const esconder = document.getElementById('hidden__mainPage')
const escolhaPage = document.getElementById('choosePage')

const rock = document.getElementById('pickedRock')
const paper = document.getElementById('pickedPaper')
const scissors = document.getElementById('pickedScissors')
const rockPc = document.getElementById('pickedRockPc')
const paperPc = document.getElementById('pickedPaperPc')
const scissorsPc = document.getElementById('pickedScissorsPc')
const result = document.getElementById('result')
const btnPlayAgain = document.getElementById('playAgain')


btnPaper.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    paper.style.display = 'flex'
    jokenpo()
} )

btnRock.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    rock.style.display = 'flex'
    jokenpo()
} )

btnScissors.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    scissors.style.display = 'flex'
    jokenpo()
} )

function jokenpo() {
    const escolhaPC = Math.floor(Math.random() * 3)
    
    switch(escolhaPC) {
        case 0 :
            paperPc.style.display = 'flex'
            
        break
        case 1 :
             scissorsPc.style.display = 'flex'

         break
        case 2 :
             rockPc.style.display = 'flex'
                    
         break
                    }
                
        result.style.display = 'block'
            
}


function clearScreen(){
    esconder.classList.remove('main__hidden')
    escolhaPage.style.display = 'none'
    paper.style.display = 'none'
    scissors.style.display = 'none'
    rock.style.display = 'none'
    paperPc.style.display = 'none'
    scissorsPc.style.display = 'none'
    rockPc.style.display = 'none'
}

btnPlayAgain.addEventListener('click', clearScreen)