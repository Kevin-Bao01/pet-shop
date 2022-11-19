const navBar = document.querySelector(".nav-bar");
const track = document.querySelectorAll(".wrapper-content");
const buttonPrev = document.querySelector(".controls-pre");
const buttonNext = document.querySelector(".controls-next");
const slides = [...track];
const widthItem = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
  slide.style.left = `${widthItem * index}px`;
});
let amountToMoveNext = 0;
let amountToMovePrev = 0;
let currentPage = 1;

const interval = setInterval(() => {
  switch(currentPage){
    case 1:
      currentPage = 2;
      break;
    case 2:
      currentPage = 3;
      break;
    default:
      currentPage = 1;
      break;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${(currentPage - 1)*widthItem}px)`;
  });
},20000)

buttonPrev.addEventListener('click',function(){
  switch(currentPage){
    case 1:
      currentPage = 3;
      break;
    case 2:
      currentPage = 1;
      break;
    default:
      currentPage = 2;
      break;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${(currentPage - 1)*widthItem}px)`;
  });  
})

buttonNext.addEventListener('click',function(){
  switch(currentPage){
    case 1:
      currentPage = 2;
      break;
    case 2:
      currentPage = 3;
      break;
    default:
      currentPage = 1;
      break;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${(currentPage - 1)*widthItem}px)`;
  });  
})
window.addEventListener("scroll", () => {
  if(this.scrollY === 0){
    navBar.style.backgroundColor = '#2f364000'
    return;
  }
  navBar.style.backgroundColor = '#2f3640';
});