gsap.registerPlugin(ScrollTrigger);

// vertical animation
const verticalTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".vertical",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=2000"
  }
});

verticalTL.to(".vertical__section--hero .vertical__section__inner", {
  scale: .8
})

verticalTL.to(".vertical__section--hero", {
  opacity: .3
}, "<")

verticalTL.from(".vertical__section--second", {
  yPercent: 100
})


// horizontal animation
// animation 01
const section_2 = document.querySelector(".horizontal");
let cards = gsap.utils.toArray(".animated01");
if (window.innerWidth > 856)
  gsap.to(cards, {
    xPercent: -55 * (cards.length - 1),
    scrollTrigger: {
      trigger: section_2,
      pin: true,
      scrub: 1,
      start: "top top",
      snap: 1 / (cards.length - 1),
      end: "+=100%"
    }
  })

// animation 02
if (window.innerWidth > 856) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal02",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      end: "+=3500"
    }
  })
  tl.from(".card--01", {
    xPercent: 75,
    opacity: 0
  }).to(".card--01", {
    xPercent: 0,
    opacity: 1
  }).from(".card--02", {
    xPercent: 75,
    opacity: 0
  }).to(".card--02", {
    xPercent: 0,
    opacity: 1
  }).from(".card--03", {
    xPercent: 75,
    opacity: 0
  }).to(".card--03", {
    xPercent: 0,
    opacity: 1
  })
} else {
  gsap.from(".card--01", {
    xPercent: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: ".card--01",
      scrub: 1,
      start: "top bottom",
      end: "bottom center+=100"
    }
  })
  gsap.from(".card--02", {
    xPercent: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: ".card--02",
      scrub: 1,
      start: "top bottom",
      end: "bottom center+=100"
    }
  })
  gsap.from(".card--03", {
    xPercent: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: ".card--03",
      scrub: 1,
      start: "top bottom",
      end: "bottom center+=100"
    }
  })
}



// scroll animation03
const tl03 = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal03",
    pin: true,
    pinSpacing: true,
    scrub: 1,
    end: "+=3500"
  }
})

tl03.from(".card--04", {
  xPercent: 100,
  yPercent: 100,
  opacity: 0
}).to(".card--04", {
  opacity: .5,
  scale: .8
}).from(".card--05", {
  xPercent: 100,
  yPercent: 100,
  opacity: 0,
  scale: 0.1
}).to(".card--05", {
  opacity: .5,
  scale: .9
}).from(".card--06", {
  xPercent: 100,
  yPercent: 100,
  opacity: 0,
  rotate: 360
})

const tl04 = gsap.timeline({
  scrollTrigger:{
    trigger:".expand",
    pin: true,
    scrub:true,
    start:"center center",
    end: "+=5000"
  }
});
tl04.from(".expand p",{
  scale:0, opacity:0
}).to(".expand p",{
  scale:25, opacity:1
}).to(".expand__container > span",{
  width: "100%"
})

// Smooth scroll
const lenis = new Lenis(
  {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  }
)

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf)