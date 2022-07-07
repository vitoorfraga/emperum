// Mudar cor do header quando der scroll

const header = document.querySelector('.header')
const navHeight = header.offsetHeight;


window.addEventListener('scroll', function(){
    if (window.scrollY >= navHeight){
        header.classList.add('header-active')
    } else {
        header.classList.remove('header-active')
    }
})

const ask = document.querySelector('.faq-item')


// Abrir Perguntas do FAQ
const awnsers = document.querySelectorAll('.faq-item');
const iconsAsk = document.querySelectorAll('.ask-icon')

awnsers.forEach((event)=>{
    let ask = event.children[0]
    let askIcon = ask.children[0]
    event.addEventListener('click',()=>{
        console.log(askIcon)
        if(askIcon.classList.contains('icon-chevron-right')){
            askIcon.classList.remove('icon-chevron-right')
            console.log('1- Removeu >')
            askIcon.classList.add('icon-chevron-down')

        } else{
            askIcon.classList.remove('icon-chevron-down')
            askIcon.classList.add('icon-chevron-right')
        }
        if(event.children[1].classList.contains("ask-active")){
            event.children[1].classList.remove("ask-active");
        }
        else{
            event.children[1].classList.add("ask-active");
            
        }
    })
})


// Scroll Reveal Settings
ScrollReveal().reveal('#sobre, #servicos, #depomentos', { delay: 500, reset: true});
ScrollReveal().reveal('.intro-title, .section-intro, .sobre-image', { delay: 700, reset: true});

// abrir menu Mobile
const menuMobile = document.getElementById('menu-mobile')
const iconeAbrirMenu = document.getElementById('abrir-menu')

iconeAbrirMenu.addEventListener('click', ()=>{
    console.log('clicou')
    menuMobile.classList.add('ativar-menu')
})

const iconeFecharMenu = document.getElementById('fechar-menu')

iconeFecharMenu.addEventListener('click', ()=>{
    console.log('clicou')
    menuMobile.classList.remove('ativar-menu')
})