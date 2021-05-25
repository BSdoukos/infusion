(function addJSClass(){
    const HTML = document.querySelector('html');
    HTML.classList.add('js');
    HTML.classList.remove('no-js');
})();

(function configureMenu() {
    let menu = {button: document.querySelector('.menu-button'), nav: document.querySelector('header nav'), isOpen: false, maxMobileWidth: 1330};

    if (this.innerWidth <= menu.maxMobileWidth) {
        closeMenu();
    }

    window.addEventListener('resize', function removeMobileMenuStyle() {
        if (window.innerWidth > menu.maxMobileWidth) {
            menu.nav.removeAttribute('style');
        } else if (!menu.nav.getAttribute('style')) {
            closeMenu();
        }
    });

    menu.button.addEventListener('click', function openOrClose() {
        if (!menu.isOpen) {
            openMenu()
        } else {
            closeMenu()
        }
    });

    function openMenu() {
        let menuTopViewportPosition = menu.nav.getBoundingClientRect().top + 'px';
        let menuStyle = ['max-height: calc(100vh - ' + menuTopViewportPosition + ');', 'overflow: hidden'];
        menu.nav.setAttribute('style', menuStyle.join(' '));
        menu.isOpen = true;
    }
    function closeMenu() {
        let menuStyle = ['max-height: 0px;', 'overflow: hidden'];
        menu.nav.setAttribute('style', menuStyle.join(' '));
        menu.isOpen = false;
    }
})();

(function configureImagesCarousel() {
    let carousel = {container: document.querySelector('.laptop-slideshow'), itens: document.querySelectorAll('.laptop-slideshow figure'), previousButton: document.querySelector('.laptop-slideshow .prev'), nextButton: document.querySelector('.laptop-slideshow .next')};

    let possiblyShow = document.querySelectorAll('.laptop-slideshow .show')
    Array.prototype.forEach.call(possiblyShow, function clearShowing(item) {
        item.classList.remove('show');
    });
    carousel.itens[0].classList.add('show');

    carousel.previousButton.style.display = 'initial';
    carousel.nextButton.style.display = 'initial';
    let currentSlide = 0;
    carousel.previousButton.addEventListener('click', function goToPreviousSlide() {
        if (currentSlide === 0) {
            currentSlide = 3;
        } else {
            currentSlide--;
        }
        carousel.container.querySelector('.show').classList.remove('show');
        carousel.itens[currentSlide].classList.add('show');
    })
    carousel.nextButton.addEventListener('click', function goToNextSlide() {
        if (currentSlide === 3) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        carousel.container.querySelector('.show').classList.remove('show');
        carousel.itens[currentSlide].classList.add('show');
    })
})();
(function configureTestimonialsCarousel() {
    let carousel = {container: document.querySelector('.testimonials-slideshow'), itens: document.querySelectorAll('.testimonials-slideshow figure'), previousButton: document.querySelector('.testimonials-slideshow .prev'), nextButton: document.querySelector('.testimonials-slideshow .next')};

    let possiblyShow = document.querySelectorAll('.testimonials-slideshow .show')
    Array.prototype.forEach.call(possiblyShow, function clearShowing(item) {
        item.classList.remove('show');
    });
    carousel.itens[0].classList.add('show');

    carousel.previousButton.style.display = 'initial';
    carousel.nextButton.style.display = 'initial';
    let currentSlide = 0;
    carousel.previousButton.addEventListener('click', function goToPreviousSlide() {
        if (currentSlide === 0) {
            currentSlide = 1;
        } else {
            currentSlide--;
        }
        carousel.container.querySelector('.show').classList.remove('show');
        carousel.itens[currentSlide].classList.add('show');
    })
    carousel.nextButton.addEventListener('click', function goToNextSlide() {
        if (currentSlide === 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        carousel.container.querySelector('.show').classList.remove('show');
        carousel.itens[currentSlide].classList.add('show');
    })
})();