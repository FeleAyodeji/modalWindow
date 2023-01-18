'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-Modal')
const btnsOpenModal = document.querySelectorAll('.show-Modal') //we used querySelectorAll to select the three open modal buttons.
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) 
    btnsOpenModal[i].addEventListener('click',function(){
        console.log('button clicked');
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })     
