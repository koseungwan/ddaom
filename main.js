'use strict';


// Make navbar transparent when it is on th top
const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    if (window.scrollY > navbarheight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle Scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})