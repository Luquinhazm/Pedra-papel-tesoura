import { btnModal, modalRunes, btnClose } from "./domElements.js"

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

