// gsap.from('#page1-text h2, #page1-text p, #page1-text button', {
//   scale: 1.5,
//   y: 200,
//   opacity: 0,
//   duration: 3,
//   // stagger: 1,
// })

gsap.to('#navbar', {
  backgroundColor: '#092628',
  duration: 0.5,
  height: '90px',
  scrollTrigger: {
    trigger: '#navbar',
    scroller: 'body',
    // markers: true,
    start: 'top 0%',
    end: 'top -10%',
    scrub: 1,
  },
})

gsap.to('#bg-img', {
  scale: 1.2,
  duration: 1,
  scrollTrigger: {
    trigger: '#bg-img',
    scroller: 'body',
    start: 'top 5%',
    end: 'top -30%',
    // markers: true,
    scrub: 2,
  },
})

gsap.from('.topic-cards img', {
  bottom: '-10rem',
  // duration: 0.5,
  scrollTrigger: {
    trigger: '#page2',
    scroller: 'body',
    start: 'top 80%',
    end: 'top -100%',
    // markers: true,
    scrub: 2,
  },
})

var swiper = new Swiper('.mySwiper', {
  effect: 'cards',
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

gsap.to('#side-img', {
  y: -300,
  duration: 0.5,
  scrollTrigger: {
    trigger: '#page3',
    scroller: 'body',
    start: 'top 60%',
    end: 'top -100%',
    // markers: true,
    scrub: 3,
  },
})
