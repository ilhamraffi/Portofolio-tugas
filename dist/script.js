//navbar fixed
Window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOff > fixedNav) {
        header.classList.add ('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
  }; 
// Hamburger
const hamburger = document.querySelector ('hamburger');
const navMenu = document.querySelector ('nav-menu');

hambuger.addEventListener ('click', function(){
    hambuger.classList.toggle('hambuger-active');
    navMenu.classList.toggle('hidden');
});