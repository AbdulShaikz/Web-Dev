// gsap.to(".box", {
//     x:200,
//     y: 300,
//     delay: 3,
//     duration:5,
//     stagger:1,
//     repeat: -1,
// })

// gsap.from(".box", {
//     x: 200,
//     y: 300,
//     delay: 0,
//     duration:5,
//     stagger: 1,
//     backgroundColor: "blue",
// })

// let timeline = gsap.timeline();

gsap.to(".box", {
    x: 500,
    delay: 0,
    duration:5,
    backgroundColor: "yellow",
    yoyo: true,
    repeat:-1,
})
gsap.from(".box2", {
    x: 500,
    delay: 0,
    duration:5,
    backgroundColor: "yellow",
    yoyo: true,
    repeat:-1,
})
