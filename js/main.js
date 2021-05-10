$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__top-inner').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

    $('.blog__items').slick({
        arrows: false,
        dots: true,
        speed: 900,
        fade: true,
        cssEase: 'linear',
      });

    $('.header__burger, .menu__item').on('click', function() {
        $('.header__burger').toggleClass('header__burger--active');
        $('.menu').toggleClass('menu--active');
        $('body').toggleClass('lock');
    });

    $(window).on('scroll', function() {
        $('.header__top').toggleClass('header__top--active', $(this).scrollTop() > 98);
    });

    var mixer = mixitup('.gallery__items');
});