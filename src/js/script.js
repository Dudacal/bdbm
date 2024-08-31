const body = document.body;
let lastScroll = 0;
const bghead = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
        bghead.classList.remove("active")
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
        bghead.classList.add("active")
    }
    lastScroll = currentScroll;
})

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active')
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
        ? 'bx bx-x'
        : 'bx bx-menu'
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
(function ($) {

    $(document).ready(function () {

        var s = $('.slider'),
            sWrapper = s.find('.slider-wrapper'),
            sItem = s.find('.slide'),
            btn = s.find('.slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_date = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text = s.find('.slide-text'),
            slide_more = s.find('.slide-more'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('next')) {

                (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
            } else if ($(this).hasClass('prev')) {

                (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
            }
            TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) })


            //CONTENT ANIMATIONS

            var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
            var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

            TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

        });
    });
})(jQuery);

$('.overlay').addClass('overlay-blue');

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
});
ScrollReveal().reveal('.desc', { origin: 'top' });
ScrollReveal().reveal('.left, .right', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dudacal20@gmail.com",
        Password: "senha123",
        To: "dudacal20@gmail.com",
        From: "dudacal20@gmail.com",
        ReplyFrom: document.getElementById("email").value,
        Subject: "Mensagem de " + document.getElementById("user").value,
        Body: "Primeiro nome / Apelido : " + document.getElementById("user").value +
            "<br>E-mail: " + document.getElementById("email").value +
            "<br>Telefone: " + document.getElementById("number").value +
            "<br>Assunto / Sugestão: " + document.getElementById("subject").value +
            "<br>Mensagem: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}