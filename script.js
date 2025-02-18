gsap.from("#nav",{
    y: -100,
  ease: "power4.out",
  opacity:0,
  duration: 1,
  skewY: 7,
  stagger: {
    amount: 3
  }
})

gsap.from(".mainText",{
    scale:0.5,
    opacity:0,
    duration:.8,
    ease:"power2",
    scaleY:3,
})

gsap.from("img",{
    scale:0,
    transform:"rotate(70deg)",
    duration:.9,
    opacity:0,
})
gsap.from(".dot",{
    y:-50,
    scale:0,
    ease:"bounce.out",
    duration:1,
})

gsap.from("#btm-left",{
    x:-100,
    opacity:0,
    duration:.9,
})

gsap.from("#ico, .lowerText",{
    x:50,
    opacity:0,
    duration:.9,
    stagger:.3,
})

var imgMain = document.querySelector("#img4")
var secondImg = document.querySelector("#img2")
var firstImg = document.querySelector("#img1")
var thirdImg = document.querySelector("#img3")
imgMain.addEventListener("mouseenter", function(dets){
    // secondImg.style.transform = "translate(-115%, -50%) rotate(0deg)";
    // firstImg.style.transform = "translate(140%, -50%) rotate(0deg)";
    // thirdImg.style.transform = "translate(-240%, -50%) rotate(0deg)";
    // imgMain.style.transform = "translate(5%, -50%) rotate(0deg)";
    gsap.to("#img2",{
        // transformOrigin: "-100% 200%",
        // rotation:0,
        transform: "translate(-115%, -50%) rotate(0deg)",
    })
    gsap.to("#img1",{
        transform: "translate(140%, -50%) rotate(0deg)",
    })
    gsap.to("#img3",{
        transform: "translate(-240%, -50%) rotate(0deg)",
    })
    gsap.to("#img4",{
        transform: "translate(5%, -50%) rotate(0deg)",
    })
    gsap.to(".mainText",{
        scaleY:1.4,
        fontSize:"12vw",
    })

})

imgMain.addEventListener("mouseleave",function(dets){
    secondImg.style.transform = "translate(-50%, -50%) rotate(-20deg)";
    firstImg.style.transform = "translate(-50%, -50%) rotate(-30deg)";
    thirdImg.style.transform = "translate(-50%, -50%) rotate(-10deg)";
    imgMain.style.transform = "translate(-50%, -50%) rotate(0deg)";
    gsap.to("#img1",{
        transform: "translate(-50%, -50%) rotate(-30deg)",
    })
    gsap.to("#img2",{
        transform: "translate(-50%, -50%) rotate(-20deg)",
    })
    gsap.to("#img3",{
        transform: "translate(-50%, -50%) rotate(-10deg)",
    })
    gsap.to("#img4",{
        transform: "translate(-50%, -50%) rotate(0deg)",
    })
    gsap.to(".mainText",{
        scale:1,
    })
})

