// function openFunction() {
//     var nav = document.getElementById("navmobi");
//     nav.classList.toggle('active')
//   }

// Glidejs
const glide = document.querySelector(".glide");

if (glide)
new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    gap: 0,
    hoverpause: true,
    autoplay: 4000,
    animationDuration: 800,
    animationTimingFunc: "linear",
}).mount();

// AOS
AOS.init();   

// Hamburger
const menuHamburger = document.querySelector('.hamburger');
const menuBtn = document.querySelector('.menu-Btn');
menuHamburger.addEventListener('click', () => {
  menuBtn.classList.toggle("open");
})

// const menuBtn = document.querySelector('.menu-Btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuBtn.classList.add('open')
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open')
//     menuOpen = false
//   }
// })

// scroll-Top menu nagivaion
$(window).scroll(function(){
  if ($(window).scrollTop() > 100){ 
     $('.scroll-top').slideDown(100);
     $(".scroll-top").css({
        "opacity": "1",
        "visibility" :"visible",
        "transition": "all 300ms ease-in-out"
     });
  } 
  else{
     $('.scroll-top').css({
        'opacity' : '0',
        "visibility" :"hidden",
        "transition": "all 300ms ease-in-out"
     });
  }
}); 