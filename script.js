'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-Modal')
const btnsOpenModal = document.querySelectorAll('.show-Modal') //we used querySelectorAll to select the three open modal buttons.

const openModal = function(){
    console.log('button clicked');
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    }

for (let i = 0; i < btnsOpenModal.length; i++) // we used this for loop to iterate through the three openmodal buttons because they basically carry the same function.
    btnsOpenModal[i].addEventListener('click', openModal) // we added the eventlistner so as to add functionality to the button after its been clicked 
    
btnCloseModal.addEventListener('click' , closeModal) // i didnt call the function as closeModal() because i want the function to be called after clicking the closemodal butten. 
overlay.addEventListener('click' , closeModal)// Same reason as above. so as the closemodal function cam be called after clicking the overlay button

document.addEventListener('keydown' , function(e){
    if (e.key === 'Escape'  && !modal.classList.contains('hidden')){
        closeModal()
    }
})