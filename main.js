// slider
const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");
const dotItem = document.querySelectorAll(".slider-dot-item");
const sliderItemwidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;
let index = 0;
let postionX = 0;
nextBtn.addEventListener("click", function(){
    handleChangeSlide(1);
});
prevBtn.addEventListener("click", function(){
    handleChangeSlide(-1);
});
function handleChangeSlide(direction){
    if(direction === 1 ){
        if(index > sliderLength -1) {
            index = sliderLength - 1;
            return ;
        }
        postionX = postionX - sliderItemwidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
        index++;
    }else if(direction === -1){
        if(index <= 0 ) {
            index = 0 ;
            return ;
        }
        postionX = postionX + sliderItemwidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
        index--;
    }
} 

// modal 
const buyBtns = document.querySelectorAll('.js-buy-btn')
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-modal-close')
const modalcontain = document.querySelector('.js-modal-container')
function showModal(){
    modal.classList.add('open')
}
function hidenModal(){
    modal.classList.remove('open')
}
for( const buyBtn of buyBtns)
{
    buyBtn.addEventListener('click', showModal)
}
close.addEventListener('click',hidenModal)
modal.addEventListener('click',hidenModal)
modalcontain.addEventListener('click', function(event){
    event.stopPropagation()
})