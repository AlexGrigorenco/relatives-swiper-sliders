
const htmlSliders = ['slider-1', 'slider-2', 'slider-3', 'slider-4'].map(slider => `
<div class="swiper slider ${slider}">
<div class="swiper-wrapper slider__wrapper">
  <div class="swiper-slide slider__item">
  <div class="img-wrapper">
    
  </div>
  </div>
  <div class="swiper-slide slider__item">
  <div class="img-wrapper">
    
  </div>
  </div>
  <div class="swiper-slide slider__item">
  <div class="img-wrapper">
    
  </div>
  </div>
  <div class="swiper-slide slider__item">
  <div class="img-wrapper">
    
  </div>
  </div>
  <div class="swiper-slide slider__item">
  <div class="img-wrapper">
    
  </div>
  </div>
  <div class="swiper-slide slider__item">
  <div class="img-wrapper">
    
  </div>
  </div>
</div>
</div>
`).join('')

document.querySelector('.sliders-wrapper').innerHTML = htmlSliders

let num = 1
document.querySelectorAll('.img-wrapper').forEach(elem => {  

  elem.innerHTML = `<img src="./images/${num}.jpg" alt="image">`

  num++
  
})

//=============SWIPER

document.querySelectorAll('.slider').forEach((element, index) => {
  window[`slider${index + 1}`] = new Swiper(element, {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 2,
    //speed: 5000,
    slidesOffsetBefore: -150,
    
  });
})

bindSwipers(slider1, slider2, slider3, slider4)



// MODAL


const img = document.querySelectorAll('.slider__item img')
const modalFade = document.querySelector('.modal-fade')
const modal = modalFade.querySelector('.modal')

modalFade.addEventListener('click', () => {
  modalFade.classList.toggle('modal-fade--active')
})

img.forEach(elem => {

  elem.addEventListener('click', () => {
    modalFade.classList.toggle('modal-fade--active')

    modal.addEventListener('click', event => event.stopPropagation())


    modal.innerHTML = `<img src="${elem.getAttribute('src')}" alt="image">`

  })
  
})



