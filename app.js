const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
        header.style.backgroundColor = "#29323c";
        console.log("activated")
    } else {
        header.style.backgroundColor = "transparent";
    }
})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
})