let mobileMenu = document.querySelector('#mobile-menu')
let navIcon = document.querySelector('#icon-menu i')
let colseIcon = document.querySelector('#close-icon i')
let links = document.querySelectorAll('#mobile-menu a')

// Open Menu
navIcon.addEventListener('click', () => {
  mobileMenu.classList.add('left-0')
  mobileMenu.classList.remove('left-[-100%]')
})
// Close Menu
colseIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('left-0')
  mobileMenu.classList.add('left-[-100%]')
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('left-0')
    mobileMenu.classList.add('left-[-100%]')
  })
})

// header Position fixed
let header = document.querySelector('#header')
window.addEventListener('scroll',()=>{
  if(window.scrollY > 250){
    header.classList.add('fixed')
    header.classList.add('top-0')
    header.classList.remove('absolute')
  }
  else{
    header.classList.remove('fixed')
    header.classList.remove('top-0')
    header.classList.add('absolute')
  }
})

// Gallery
let smallImg = document.querySelectorAll('#gallery .small-img')
smallImg.forEach((img) => {
  img.addEventListener('click', () => {
    let bigImg = document.querySelector('.big-img');
    let ImgSrc = img.getAttribute('src')
    bigImg.src = ImgSrc
  })
})







