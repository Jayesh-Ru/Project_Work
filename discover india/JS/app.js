// Here we go again .
const content = document.querySelector('.dropdown-content');
const dropBtn = document.querySelector('.drop-btn');
const dropBtn1 = document.querySelector('.drop-btn1');
const dropBtn2 = document.querySelector('.drop-btn2');
const dropBtn3 = document.querySelector('.drop-btn3');
const dropBtn4 = document.querySelector('.drop-btn4');
const dropBtn5 = document.querySelector('.drop-btn5');
const dropBtn6 = document.querySelector('.drop-btn6');
const dropBtn7 = document.querySelector('.drop-btn7');
const dropBtn8 = document.querySelector('.drop-btn8');
const dropIcon = document.querySelector('.dropdown i');
/* I tried to set display none for the dropdown content in css but i didn't know why
it doesn't work, So i did here in Javascript. */
content.style.background = 'transparent';
content.style.display='none'
content.style.border = 'none';
dropBtn.style.display = 'none';
dropBtn1.style.display = 'none';
dropBtn2.style.display = 'none';

// This function is for the dropdown link (places).
function dropdown1(){
    content.style.background = '#fff';
    content.style.border = '1px solid #000';
    content.style.display='block';
    dropBtn.style.display = 'block';
    dropBtn1.style.display = 'block';
    dropBtn2.style.display = 'block';
    dropBtn3.style.display = 'block';
    dropBtn4.style.display = 'block';
    dropBtn5.style.display = 'block';
    dropBtn6.style.display = 'block';
    dropBtn7.style.display = 'block';
    dropBtn8.style.display = 'block';
    dropIcon.className = 'fas fa-chevron-up';
};
// This function is for the dropdown link (places).
function dropdown2(){
    content.style.background = 'transparent';
    content.style.display='none'
    content.style.border = 'none';
    dropBtn.style.display = 'none';
    dropBtn1.style.display = 'none';
    dropBtn2.style.display = 'none';
    dropBtn3.style.display = 'none';
    dropBtn4.style.display = 'none';
    dropBtn5.style.display = 'none';
    dropBtn6.style.display = 'none';
    dropBtn7.style.display = 'none';
    dropBtn8.style.display = 'none';
    dropIcon.className = 'fas fa-chevron-down';
};
// navbar in mobile view.
const navbar = document.querySelector('nav');
const togle = document.querySelector('.toggle button');
const icon = document.querySelector('.toggle button i');
togle.addEventListener('click', function(){
    navbar.classList.toggle('actif');
    navbar.style.top = '80px';
    if(navbar.classList != 'navbar'){
        icon.className = 'fas fa-times';
    }
    else{
        icon.className = 'fas fa-bars';
    }
});
// This removes the mobile navbar when clicking on nav-links.
function removeNav(){
    navbar.classList.remove('actif');
    icon.className = 'fas fa-bars';
}

// Changing header background on scroll.
// also showing the about section while scrolling.
const header = document.querySelector('header');
const about = document.getElementById('about');
const cursor = document.getElementById('cursor');
const darkBtn = document.querySelector('#darkMode');

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        header.classList.add('sticky');
        about.style.opacity = '1';
        cursor.style.display = 'block';
        darkBtn.style.display = 'block';
    }
    else{
        header.classList.remove('sticky');
        about.style.opacity = '0';
        cursor.style.display = 'none';
        darkBtn.style.display = 'none';
    }
});


//
let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec