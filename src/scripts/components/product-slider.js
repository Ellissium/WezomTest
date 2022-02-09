import vars from '../vendor/vars';

let slideNumber = 0;

vars.productThumbs.addEventListener('click', (e) => {
  if (e.target.classList.contains('product__thumb')){
    removeActive();
    let src = e.target.querySelector('.product__image').getAttribute('src');
    e.target.classList.add('active');
    for (let i=0;i<vars.slides.length; i++){
      if (e.target == vars.slides[i]){
        slideNumber = i;
      }
    }
    setImageSrc(src);
  }
});

vars.productPrev.addEventListener('click', (e) => {
  slideNumber -= 1;
  changeSlides();
  removeActive();
  setActive();
});

vars.productNext.addEventListener('click', (e) => {
  slideNumber += 1;
  changeSlides();
  removeActive();
  setActive();
});

function removeActive() {
  vars.slides.forEach((el, i) => {
    el.classList.remove('active');
  });
}

function setActive() {
  vars.slides[slideNumber].classList.add('active');
}

function setImageSrc(src) {
  vars.productBigImage.setAttribute('src', src);
}

function changeSlides() {
  if (slideNumber > vars.slides.length-1) {
    slideNumber = 0;
  }
  if (slideNumber < 0) {
    slideNumber = vars.slides.length-1;
  }
  let src = vars.slides[slideNumber].querySelector('.product__image').getAttribute('src');
  setImageSrc(src);
}