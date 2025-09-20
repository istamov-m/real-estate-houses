const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('observed');
        }
        else{
            entry.target.classList.remove('observed');
        }
    })
})




const toggleMobileMenuBtn = document.querySelector('.mobile-menu-toggle')
const mobileMenu = document.querySelector('.header-nav-mobile')

function toggleMobileMenu(){
    toggleMobileMenuBtn.classList.toggle('mobile-menu-toggle-active');
    mobileMenu.classList.toggle('header-nav-mobile-active');
}

const heroSwiper = new Swiper(".HeroSwiper", {
      slidesPerView: 1,

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

 const mediaQueryList = window.matchMedia('(max-width: 1000px)');

const reviewsSwiper = new Swiper(".ReviewsSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,


      breakpoints: {
        999: {
              slidesPerView: 2,
              spaceBetween: 20,
        },

        1499:{
            slidesPerView: 4,
            spaceBetween: 40,
        },
        
      },

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

});

const propertyCards = document.querySelectorAll('.property-card');

const propertyCardBg = document.querySelectorAll('.property-card-bg');
const propertyCardBgOverLay = document.querySelectorAll('.property-card-bg-overlay');

const propertyCardInfo = document.querySelectorAll('.property-card-info');
const propertyCardLabel = document.querySelectorAll('.property-card-label');

const mediaQuery = window.matchMedia("(min-width: 899px)");

propertyCards.forEach((card, i) => {
        card.addEventListener('mouseover', () => {
            if((mediaQuery.matches)){
                propertyCardInfo[i].classList.add('property-card-info-show');
                propertyCardBg[i].classList.add('property-card-bg-scale');
                propertyCardBgOverLay[i].classList.add('property-card-bg-overlay-show');
                propertyCardLabel[i].classList.add('property-card-label-color-change');
            }
        });
        card.addEventListener('mouseout', () => {
            if((mediaQuery.matches)){
                propertyCardInfo[i].classList.remove('property-card-info-show');
                propertyCardBg[i].classList.remove('property-card-bg-scale');
                propertyCardBgOverLay[i].classList.remove('property-card-bg-overlay-show');
                propertyCardLabel[i].classList.remove('property-card-label-color-change');
            }
        });

        if(i % 2 == 0){
            propertyCards[i].classList.add('not-observed-to-right');
        } 
        else {
            propertyCards[i].classList.add('not-observed-to-left');
        }
});

// for(let i = 0; i <= propertyCards.length; i++){
//     if(i % 2 == 0){
//         propertyCards[i].classList.add('not-observed-to-left')
//     }
// }


propertyCardInfo.forEach((p, i) => {

    mediaQuery.addEventListener('change', () => {
        p.classList.add('property-card-info-show');
        propertyCardBg[i].classList.remove('property-card-bg-scale');
        propertyCardBgOverLay[i].classList.add('property-card-bg-overlay-show');
    });

})



const questionLines = document.querySelectorAll('.question-line');
const answerLine = document.querySelectorAll('.question-line-a');
const questionArrow = document.querySelectorAll('.question-line span');

questionLines.forEach((q, i) => {
    q.addEventListener('click', () => {
        answerLine[i].classList.toggle('question-line-a-show');
        questionArrow[i].classList.toggle('question-line-arrow-rotate');
    })
});


const observeToTop = document.querySelectorAll('.not-observed-to-top');
const observeToLeft = document.querySelectorAll('.not-observed-to-left');
const observeToBottom = document.querySelectorAll('.not-observed-to-bottom');
const observeToRight = document.querySelectorAll('.not-observed-to-right');

function ObserverDorections(direction){
    direction.forEach(d => {
        observer.observe(d);
    });
}

ObserverDorections(observeToTop);
ObserverDorections(observeToLeft);
ObserverDorections(observeToBottom);
ObserverDorections(observeToRight);