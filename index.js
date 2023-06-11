//получим все секции
let sect_about = document.querySelector('.about');
let sect_subsection = document.querySelector('.section__subsection');
let sect_service = document.querySelector('.service');
let sect_trust = document.querySelector('.trust');
let sect_portfolio = document.querySelector('.portfolio');
let sect_request = document.querySelector('.request');
let sect_contacts = document.querySelector('.contacts');
let sect_footer = document.querySelector('.footer');


//показать убрать форму обратной связи
let request__form = document.querySelector('.request-form');
let header__wrapper = document.querySelector('.header__wrapper');
let open_form = document.querySelector('.header__title-button');
let close_form = document.querySelector('.request-form__close');

open_form.addEventListener('click', function () {
    request__form.classList.remove('request-form');
    request__form.classList.add('request-form__active');
    header__wrapper.classList.remove('header__wrapper');
    header__wrapper.classList.add('header__wrapper_active');
    sect_service.classList.add('hidden');
    sect_subsection.classList.add('hidden');
    sect_about.classList.add('hidden');
    sect_trust.classList.add('hidden');
    sect_portfolio.classList.add('hidden');
    sect_request.classList.add('hidden');
    sect_footer.classList.add('hidden');
    sect_contacts.classList.add('hidden');
    sect_contacts.classList.remove('contacts');
    sect_service.classList.remove('service');
    sect_subsection.classList.remove('section__subsection');
    sect_about.classList.remove('about');
    sect_trust.classList.remove('trust');
    sect_portfolio.classList.remove('portfolio');
    sect_request.classList.remove('request');
    sect_footer.classList.remove('footer');
});

close_form.addEventListener('click', function () {
    request__form.classList.remove('request-form__active');
    request__form.classList.add('request-form');
    header__wrapper.classList.add('header__wrapper');
    header__wrapper.classList.remove('header__wrapper_active');
    sect_service.classList.add('service');
    sect_subsection.classList.add('section__subsection');
    sect_about.classList.add('about');
    sect_trust.classList.add('trust');
    sect_portfolio.classList.add('portfolio');
    sect_request.classList.add('request');
    sect_footer.classList.add('footer');
    sect_service.classList.remove('hidden');
    sect_subsection.classList.remove('hidden');
    sect_about.classList.remove('hidden');
    sect_trust.classList.remove('hidden');
    sect_portfolio.classList.remove('hidden');
    sect_request.classList.remove('hidden');
    sect_footer.classList.remove('hidden');
    sect_contacts.classList.remove('hidden');
    sect_contacts.classList.add('contacts');
});


//слайдер хедера 
let header_title_text = document.querySelector('.header__title-text');
let header_title_foto = document.querySelector('.header__title-foto');
let header_title_items = document.querySelectorAll('.header__title-item');
let header = document.querySelector('.header');

function unActive (items) {
    for(let elem of items) {
        if(elem.classList.contains('header__title-item_active')) {
            elem.classList.remove('header__title-item_active');
        }
    }
}

function unActive_bg (header) {
    if(header.classList.contains('header__one')) {
        header.classList.remove('header__one');
    }
    if(header.classList.contains('header__two')) {
        header.classList.remove('header__two');
    }
    if(header.classList.contains('header__tree')) {
        header.classList.remove('header__tree');
    }
}

function slider () {
    let text = ['Реставрация <br> лакокрасочного <br> покрытия',
     'Профессиональная <br> окраска <br> интерьера',
      'Профессиональная <br> окраска <br> экстерьера'];
    let foto = ['./img/men1.svg', './img/men2.svg', './img/men3.svg'];


    let count = 0;
    setInterval(function () {
        count++;
        if (count > 10) {
            count = 0;
        }
        if (count == 0) {
            header_title_foto.classList.add('opasity');
            header_title_text.firstChild.classList.add('opasity');
            unActive(header_title_items);
            header_title_items[0].classList.add('header__title-item_active');
        }
        if (count == 1) {
            header_title_text.firstChild.innerHTML = text[0];
            header_title_foto.firstElementChild.src = foto[0];
            unActive_bg(header);
            header.classList.add('header__one');
        }
        if (count == 2) {
            header_title_foto.classList.remove('opasity');
            header_title_text.firstChild.classList.remove('opasity');
        }
        
        if (count == 4) {
            header_title_foto.classList.add('opasity');
            header_title_text.firstChild.classList.add('opasity');
            unActive(header_title_items);
            header_title_items[1].classList.add('header__title-item_active');
        }
        if (count == 5) {
            header_title_text.firstChild.innerHTML = text[1];
            header_title_foto.firstElementChild.src = foto[1];
            header.classList.add('header__two');
        }
        if (count == 6) {
            header_title_foto.classList.remove('opasity');
            header_title_text.firstChild.classList.remove('opasity');
        }

        if (count == 8) {
            header_title_foto.classList.add('opasity');
            header_title_text.firstChild.classList.add('opasity');
            unActive(header_title_items);
            header_title_items[2].classList.add('header__title-item_active');
        }
        if (count == 9) {
            header_title_text.firstChild.innerHTML = text[2];
            header_title_foto.firstElementChild.src = foto[2];
            header.classList.add('header__tree');
        }
        if (count == 10) {
            header_title_foto.classList.remove('opasity');
            header_title_text.firstChild.classList.remove('opasity');
        }

    },1000)
}

slider();


//скролл в вверх
let button_to_top = document.querySelector('.contacts__button');
button_to_top.addEventListener('click', function () {
    scrollTo(0 , 0);
});


// скрол по навигации сайта
let toAbout = document.querySelector('.nav__about');
toAbout.addEventListener('click', function (event) {
    event.preventDefault();
    sect_about.scrollIntoView();
});
let toService = document.querySelector('.nav__service');
toService.addEventListener('click', function (event) {
    event.preventDefault();
    sect_service.scrollIntoView();
});
let toPortfolio = document.querySelector('.nav__portfolio');
toPortfolio.addEventListener('click', function (event) {
    event.preventDefault();
    sect_portfolio.scrollIntoView();
})
let toRequest = document.querySelector('.nav__request');
toRequest.addEventListener('click', function (event) {
    event.preventDefault();
    sect_request.scrollIntoView();
})
let toContact = document.querySelector('.nav__contacts');
toContact.addEventListener('click', function (event) {
    event.preventDefault();
    sect_contacts.scrollIntoView();
});

let footertoAbout = document.querySelector('.footer__nav-about');
footertoAbout.addEventListener('click', function (event) {
    event.preventDefault();
    sect_about.scrollIntoView();
});
let footertoService = document.querySelector('.footer__nav-service');
footertoService.addEventListener('click', function (event) {
    event.preventDefault();
    sect_service.scrollIntoView();
});
let footertoPortfolio = document.querySelector('.footer__nav-portfolio');
footertoPortfolio.addEventListener('click', function (event) {
    event.preventDefault();
    sect_portfolio.scrollIntoView();
});
let footertoRequest = document.querySelector('.footer__nav-request');
footertoRequest.addEventListener('click', function (event) {
    event.preventDefault();
    sect_request.scrollIntoView();
});
let footertoContact = document.querySelector('.footer__nav-contacts');
footertoContact.addEventListener('click', function (event) {
    event.preventDefault();
    sect_contacts.scrollIntoView();
});


//изменение в картинках сервиса 
let service_blue_unactive = document.querySelectorAll('.service__blue-unactive');


let service_item_one = document.querySelector('.service__item_one');
service_item_one.addEventListener('mouseover', function () {
    service_item_one.classList.remove('service__item_one');
    service_item_one.classList.add('service__item_one-active');
    service_blue_unactive[0].style.marginTop = '-14rem';
});

service_item_one.addEventListener('mouseout', function () {
    service_item_one.classList.add('service__item_one');
    service_item_one.classList.remove('service__item_one-active');
    service_blue_unactive[0].style.marginTop = '0'
});


let service_item_two = document.querySelector('.service__item_two');
service_item_two.addEventListener('mouseover', function () {
    service_item_two.classList.remove('service__item_two');
    service_item_two.classList.add('service__item_two-active');
    service_blue_unactive[1].style.marginTop = '-14rem';
});

service_item_two.addEventListener('mouseout', function () {
    service_item_two.classList.add('service__item_two');
    service_item_two.classList.remove('service__item_two-active');
    service_blue_unactive[1].style.marginTop = '0'
});


let service_item_tree = document.querySelector('.service__item_tree');
service_item_tree.addEventListener('mouseover', function () {
    service_item_tree.classList.remove('service__item_tree');
    service_item_tree.classList.add('service__item_tree-active');
    service_blue_unactive[2].style.marginTop = '-14rem';
});

service_item_tree.addEventListener('mouseout', function () {
    service_item_tree.classList.add('service__item_tree');
    service_item_tree.classList.remove('service__item_tree-active');
    service_blue_unactive[2].style.marginTop = '0'
});


let service_item_four = document.querySelector('.service__item_four');
service_item_four.addEventListener('mouseover', function () {
    service_item_four.classList.remove('service__item_four');
    service_item_four.classList.add('service__item_four-active');
    service_blue_unactive[3].style.marginTop = '-14rem';
});

service_item_four.addEventListener('mouseout', function () {
    service_item_four.classList.add('service__item_four');
    service_item_four.classList.remove('service__item_four-active');
    service_blue_unactive[3].style.marginTop = '0'
});



//слайдер работ из портфолио


let portfolio_arrow_left_one = document.querySelector('.portfolio__arrow_left-one');
portfolio_arrow_left_one.addEventListener('click', function () {
    console.log(1);
});
let portfolio_arrow_rigth_one = document.querySelector('.portfolio__arrow_right-one');
portfolio_arrow_rigth_one.addEventListener('click', function () {
    portfolio_pic_one.classList.add('portfolio__margin-left');
});


let portfolio_arrow_left_two = document.querySelector('.portfolio__arrow_left-two');
portfolio_arrow_left_two.addEventListener('click', function () {
    portfolio_pic_one.classList.remove('portfolio__margin-left');
});
let portfolio_arrow_rigth_two = document.querySelector('.portfolio__arrow_right-two');
portfolio_arrow_rigth_two.addEventListener('click', function () {
    portfolio_pic_two.classList.add('portfolio__margin-left');
});

let portfolio_arrow_left_tree = document.querySelector('.portfolio__arrow_left-tree');
portfolio_arrow_left_tree.addEventListener('click', function () {
    portfolio_pic_two.classList.remove('portfolio__margin-left');
});
let portfolio_arrow_rigth_tree = document.querySelector('.portfolio__arrow_right-tree');
portfolio_arrow_rigth_tree.addEventListener('click', function () {
    console.log(1);
});


let portfolio_pic_one = document.querySelector('.portfolio__pic_one');
let portfolio_pic_two = document.querySelector('.portfolio__pic_two');
let portfolio_pic_tree = document.querySelector('.portfolio__pic_tree');
