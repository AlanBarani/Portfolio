const glide = document.querySelector('.glide');

if(glide)
new Glide(glide, {
    type:"carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: 'Linear',
    breakpoints:{
        996:{
            perView: 2
        },
        768:{
            perView: 1
        },
    }
}).mount(Glide)
