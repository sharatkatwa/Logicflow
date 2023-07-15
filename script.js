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
    end: 'top 0%',
    // markers: true,
    scrub: 3,
  },
})
