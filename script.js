'use strict'

// navigation
const nav = document.querySelector('.nav__links');
const dotContainer = document.querySelector('.dots');
const sections = document.querySelectorAll('.this');

let current = 0;

const names= ['HOME', "SERVICES", 'ABOUT US', 'WORK', 'CLIENTS', 'TEAM', 'FACTS', 'CONTACT'];

// hovers

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.david');
const eight = document.querySelector('.ashley');
const nine = document.querySelector('.patric');
const ten = document.querySelector('.lisa');


// chathead

const chatClick = document.querySelector('.chat');
const chatOpen = document.querySelector('.chatting')
const chatClose = document.querySelector('.x')



// navigation

nav.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
});

// side navigation

const createDots = function(){
    sections.forEach(function(_,i){
        dotContainer.insertAdjacentHTML('beforeend', `<button class='dots__dot ' href="#section--${i}" data-section="${i}"><span class="sp" href="#spans--${i}">${names[i]}</span></button>`)
    })
}
createDots()

dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'}) 
    }   
    if (e.target.classList.contains('dots__dot')) {
        const { section } = e.target.dataset;
        goToSection(section);
        activeDot(section);
    }
   
})

const activeDot = function(act){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelectorAll('.sp').forEach(dot => dot.classList.add('hide'));


    document.querySelector(`.dots__dot[href="#section--${act}"]`).classList.add('dots__dot--active');
    document.querySelector(`.sp[href="#spans--${act}"]`).classList.remove('hide');
}
activeDot(current)

const goToSection = function () {
    sections.forEach(s => {
        if(s.getBoundingClientRect() === s){
            return activeDot
        }
    }
    );
};
goToSection();

// scrolling

const functions = function(i){
const sectionObserver = new IntersectionObserver(function(entries){
    const [entry] = entries
    if(entry.isIntersecting) activeDot(i);
}, {
    root: null,
    threshold: 0,
})
sectionObserver.observe(document.querySelector(`#section--${i}`))
}

// const scrolling = function(){
//     functions(0)
//     functions(1)
//     functions(2)
//     functions(3)
//     functions(4)
//     functions(5)
//     functions(6)
//     functions(8)
// }
// scrolling()





// hovers

one.addEventListener('mouseover', function(){
    document.querySelector('.a').style.opacity = 1
})
one.addEventListener('mouseout', function(){
    document.querySelector('.a').style.opacity = 0
})

two.addEventListener('mouseover', function(){
    document.querySelector('.b').style.opacity = 1
})
two.addEventListener('mouseout', function(){
    document.querySelector('.b').style.opacity = 0
})

three.addEventListener('mouseover', function(){
    document.querySelector('.q').style.opacity = 1
})
three.addEventListener('mouseout', function(){
    document.querySelector('.q').style.opacity = 0
})

four.addEventListener('mouseover', function(){
    document.querySelector('.d').style.opacity = 1
})
four.addEventListener('mouseout', function(){
    document.querySelector('.d').style.opacity = 0
})

five.addEventListener('mouseover', function(){
    document.querySelector('.e').style.opacity = 1
})
five.addEventListener('mouseout', function(){
    document.querySelector('.e').style.opacity = 0
})

six.addEventListener('mouseover', function(){
    document.querySelector('.f').style.opacity = 1
})
six.addEventListener('mouseout', function(){
    document.querySelector('.f').style.opacity = 0
})

seven.addEventListener('mouseover', function(){
    document.querySelector('.g').style.opacity = 1
})
seven.addEventListener('mouseout', function(){
    document.querySelector('.g').style.opacity = 0
})

eight.addEventListener('mouseover', function(){
    document.querySelector('.h').style.opacity = 1
})
eight.addEventListener('mouseout', function(){
    document.querySelector('.h').style.opacity = 0
})

nine.addEventListener('mouseover', function(){
    document.querySelector('.i').style.opacity = 1
})
nine.addEventListener('mouseout', function(){
    document.querySelector('.i').style.opacity = 0
})

ten.addEventListener('mouseover', function(){
    document.querySelector('.j').style.opacity = 1
})
ten.addEventListener('mouseout', function(){
    document.querySelector('.j').style.opacity = 0
})


// chatting

chatClick.addEventListener('click', function(){
    chatOpen.classList.remove('hide')
    chatClick.classList.add('hide')
    dotContainer.style.display = 'none'
})

chatClose.addEventListener('click', function(){
    chatOpen.classList.add('hide')
    chatClick.classList.remove('hide')
    dotContainer.style.display = 'flex'
})

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        chatOpen.classList.add('hide')
        chatClick.classList.remove('hide')
        dotContainer.style.display = 'flex'
    }
    console.log(e);
})