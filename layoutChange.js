const btnPaper = document.getElementById('btnPaper')
const btnRock = document.getElementById('btnRock')
const btnScissors = document.getElementById('btnScissors')

const esconder = document.getElementById('hidden__mainPage')
const escolhaPage = document.getElementById('choosePage')
const textResult = document.getElementById('textResult')

const rock = document.getElementById('pickedRock')
const paper = document.getElementById('pickedPaper')
const scissors = document.getElementById('pickedScissors')
const rockPc = document.getElementById('pickedRockPc')
const paperPc = document.getElementById('pickedPaperPc')
const scissorsPc = document.getElementById('pickedScissorsPc')
const result = document.getElementById('result')
const btnPlayAgain = document.getElementById('playAgain')

const score = document.getElementById('scoreRecord')
let scoreContent = 0
let choosePlayer = ''

btnPaper.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    paper.style.display = 'flex'
    choosePlayer = paper
    jokenpo()
} )

btnRock.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    rock.style.display = 'flex'
    choosePlayer = rock
    jokenpo()
} )

btnScissors.addEventListener('click', ()=>{
    esconder.classList.add('main__hidden')
    escolhaPage.style.display = 'flex'
    scissors.style.display = 'flex'
    choosePlayer = scissors
    jokenpo()
} )

function jokenpo() {
    const escolhaPC = Math.floor(Math.random() * 3)
    let choosePc = ''
    
    switch(escolhaPC) {
        case 0 :
            paperPc.style.display = 'flex'
            choosePc = paper
        break
        case 1 :
             scissorsPc.style.display = 'flex'
            choosePc = scissors
         break
        case 2 :
             rockPc.style.display = 'flex'
            choosePc = rock
         break
                    }
        
        if(choosePlayer === paper && choosePc === rock){
            textResult.textContent = 'win'
           incrementar()
        }else if(choosePlayer === paper && choosePc === scissors){
            textResult.textContent = 'defeat'
            decrementar()
        }else if(choosePlayer === paper && choosePc === paper){
            textResult.textContent = 'draw'
        }

         
        if(choosePlayer === scissors && choosePc === paper){
            textResult.textContent = 'win'
            incrementar()
        }else if(choosePlayer === scissors && choosePc === rock){
            textResult.textContent = 'defeat'
            decrementar()
        }else if(choosePlayer === scissors && choosePc === scissors){
            textResult.textContent = 'draw'
        }

        if(choosePlayer === rock && choosePc === scissors){
            textResult.textContent = 'win'
            incrementar()
        }else if(choosePlayer === rock && choosePc === paper){
            textResult.textContent = 'defeat'
            decrementar()
        }else if(choosePlayer === rock && choosePc === rock){
            textResult.textContent = 'draw'
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


function decrementar(){
    for(scoreContent ; scoreContent >= 1 ; --scoreContent){
        score.textContent = "0"
    }
}

function incrementar(){
    ++scoreContent
    score.textContent = scoreContent
}