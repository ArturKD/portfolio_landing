
/*--------------------------------------------------------------- Language -------------------------------------*/


const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autmn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autmn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
}

/*--------------------------------------------------------------- Hamburger-menu Buttons -------------------------------------*/


    const navbarToggleBtn = document.querySelector('.nav-toggle-btn');
    const navbarNav = document.querySelector('.nav-list');



    function navbarToggleFunction()  {
        navbarToggleBtn.classList.toggle('active');
        navbarNav.classList.toggle('active');
    };
    function navbarRemoveFunction(link) {
        if (link.target.classList.contains('nav-link')) {
            navbarToggleBtn.classList.remove('active');
            navbarNav.classList.remove('active')};
    };

    navbarToggleBtn.addEventListener('click', navbarToggleFunction);
    navbarNav.addEventListener('click', navbarRemoveFunction);

/*--------------------------------------------------------------- Portfolio Gallery Buttons -------------------------------------*/

    const portfolioBtn = document.querySelectorAll('.black-button')
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const portfolioBtns = document.querySelector('.portfolio-btns')
    function changeImage(event) {
        if (event.target.classList.contains('black-button')) {
            portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
            portfolioBtn.forEach( (button) => button.classList.remove('active'));
            event.target.classList.add('active');
            setLocalGallery();
        }
    };
    portfolioBtns.addEventListener('click', changeImage);


/*--------------------------------------------------------------- Translate -------------------------------------*/
    const Ru = document.querySelector('.language-ru');
    const En = document.querySelector('.language-en');


    function getTranslate(language) {
    const list = document.querySelectorAll('[data-i18]')
        list.forEach((item) => {
        if (item.placeholder) {
            item.placeholder = i18Obj[language][item.dataset.i18];
            item.textContent = '';
        }
        item.textContent = i18Obj[language][item.dataset.i18]
    })
    }
    function getRu() {
        lang = 'ru'
        Ru.classList.add('active');
        En.classList.remove('active');
    }
    function getEn() {
        lang = 'en';
        En.classList.add('active');
        Ru.classList.remove('active');
    }
    Ru.addEventListener('click', () => {
    getTranslate('ru');
    getRu();
    })
    En.addEventListener('click', () => {
    getTranslate('en');
    getEn();
    })

/*--------------------------------------------------------------- Theme -------------------------------------*/

    const themeTags = ['.html','.main','.skills','.title','.skills-h2','.title-portfolio','.title-portfolio-h2','.black-button','.title-video',
    '.title-video-h2','.title-price','.title-price-h2','.price-item-title','.item-price-ul','.nav-list','.nav-link','.theme']
    const array = document.querySelectorAll(themeTags)
    const switcher = document.querySelector('.theme');
    let theme = 'light';
    function themeSave() {
        if (theme === 'light'){
            theme = 'dark'
        } else {
            theme = 'light'
        }
    }
    function lightDark() {
        array.forEach(item => {
            item.classList.toggle('ligth');
        });
    }
    switcher.addEventListener('click', lightDark)
    switcher.addEventListener('click', themeSave)


/*--------------------------------------------------------------- Video -------------------------------------*/

const videoImage = document.querySelector('.video-image')
const player = document.querySelector('.player');
const playButton = document.querySelector('.play-button')
const progressBar = document.querySelector('.progress-fill');
const progressHandle = document.querySelector('.progress')
const toggle = document.querySelector('.play-icon');
const volume = document.querySelector('.volume');
const volumeFill = document.querySelector('.volume-fill');
const mute = document.querySelector('.volume-icon');

    function videoImageDel() {
    videoImage.remove()
    }

    function togglePlay() {
        if (player.paused) {
            player.play()
            updateProgress();
            playButton.classList.remove('active');
            toggle.classList.remove('play')
            toggle.classList.add('pause')
            videoImageDel();
        } else {
            player.pause()
            playButton.classList.add('active');
            toggle.classList.remove('pause')
            toggle.classList.add('play')
        }
    }
    function updateProgress() {
        let progress = player.currentTime / player.duration;
        progressBar.style.width = Math.floor(progress * 1000) / 10 + '%';
    }

    function progressClick(e) {
        const time = (e.offsetX / progressHandle.offsetWidth) * 100;
        player.currentTime = (player.duration / 100) * time;
    }
    function volumeUpdate(e) {
        const vol = (e.offsetX / volume.offsetWidth) * 100;
        player.volume = (1 / 100) * vol;
        volumeFill.style.width = Math.floor(player.volume * 1000) / 10 + '%';
        if (player.volume == 0) {
            mute.classList.add('mute')
        } else {
            mute.classList.remove('mute')
        }
    }
    function toMute() {
        if (player.volume != 0) {
            player.volume = 0;
            mute.classList.add('mute')
        } else {
            player.volume = 0.5;
            volumeFill.style.width = Math.floor(player.volume * 1000) / 10 + '%';
            mute.classList.remove('mute')
        }
    }
player.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
volume.addEventListener('click', volumeUpdate);
progressHandle.addEventListener('click', progressClick);
player.addEventListener('timeupdate', updateProgress);
mute.addEventListener('click', toMute)

    /*--------------------------------------------------------------- Preloads -------------------------------------*/
const seasons = ['winter', 'spring', 'summer', 'autmn'];
function preloadImages() {
    seasons.forEach((season) => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/${i}.jpg`;
        }
    })
}
preloadImages();


/*--------------------------------------------------------------- Save theme and Language -------------------------------------*/
let lang  = 'en';

    function setLocalStorage() {
        localStorage.setItem('language', lang);
        localStorage.setItem('theme', theme)
    }
    window.addEventListener('beforeunload', setLocalStorage);


function setLocalGallery() {
    localStorage.setItem('season', event.target.dataset.season);
}


    function getLocalStorage() {
       if(localStorage.getItem('language')) {
            const lang = localStorage.getItem('language');
            getTranslate(lang);
            if (lang === 'ru') {
                getRu()
            }else{
                getEn()
            }
        }
       if(localStorage.getItem('theme') === 'dark'){
           lightDark()
           themeSave()
       }
       if(localStorage.getItem('season')) {
           const season = localStorage.getItem('season');
           portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
           portfolioBtn.forEach( (button) => button.classList.remove('active'));
           portfolioBtn.forEach( function (button) {
               if (button.dataset.season == season) {
                   button.classList.add('active')
               };
           });
       }
}

    window.addEventListener('load', getLocalStorage);
