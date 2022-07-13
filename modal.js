const btnModal = document.getElementById('btnRules')
const modalRunes = document.getElementById('modalRules')
const btnClose = document.getElementById('btn--close')


function switchModal(){
    const actualStlye = modalRunes.style.display
    if(actualStlye === 'flex'){
        modalRunes.style.display = 'none'
    } else{
        modalRunes.style.display = 'flex'
    }
}

btnModal.addEventListener('click', switchModal)
btnClose.addEventListener('click', switchModal)