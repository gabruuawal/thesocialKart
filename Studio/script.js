function init(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

// cursor code

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -12.5+"px"
    crsr.style.top = dets.y -12.5+"px"
})
//Entry Animation of Headline
gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})
//mouse enter on video 

var vid = document.querySelector(".page1 video")
vid.addEventListener("mouseenter", function(){
  crsr.style.width = "160px";  
  crsr.style.borderRadius = "20px";
  crsr.style.height = "27px";  
  crsr.innerHTML = "Sound On";
  crsr.style.backgroundColor = "#EDBFFF";
  crsr.style.mixBlendMode = "normal";
  // crsr.style.width = "70px";  
  crsr.style.color = "black";
  crsr.style.display = "flex";  
  crsr.style.justifyContent = "center";
  crsr.style.alignItems = "center"; 
  crsr.style.fontSize = "20px"; 
  // crsr.style.height = "100px";
})

vid.addEventListener("mouseleave", function() {
  crsr.style.width = "25px";  
  crsr.style.height = "25px";  
  crsr.style.borderRadius = "50%";  
  crsr.style.backgroundColor = "#EDBFFF";
  crsr.style.mixBlendMode = "difference";  
  crsr.innerHTML = "";  
});

init()

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top 27%",
    end:"top 10",
    scrub: 3
  }
})

tl.to(".page1 h1", {
  x : -100,
},"anim")

tl.to(".page1 h2", {
  x : 100,
},"anim")

tl.to(".page1 video", {
  width:"90%"

},"anim")

//Color changing to white

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -110%",
    end:"top -130",
    scrub:2
  }
})

tl2.to(".main", {
  backgroundColor: "#fff"
})

//page-3 part 1 elements scroll animations

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -285%",
    end:"top -315",
    scrub: 2
  }
})

tl3.to(".page3 h1", {
  y : 180,
  
},"shift")

tl3.to(".page3-part1 img", {
  x : 60,
  
},"shift")

tl3.to(".page3-part1 video", {
  y : 70,
  
},"shift")

//page-3 part 2 elements scroll animations

var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -360%",
    end:"top -380",
    scrub: 2
  }
})

tl4.to(".page3-part2 img", {
  y : 100,
  
},"shift2")

tl4.to(".page3-part2 video", {
  x : -40,
  
},"shift2")


var tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -400%",
    end:"top -420",
    scrub: 2
  }
})

tl5.to(".main", {
  backgroundColor: "#0F0D0D"
})

// var splitHeadline = new SplitText(".page5 h2", { type: "words, chars" });
var tl6 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -550%",
    end:"top -650",
    scrub: 2
  }
})
tl6.to(".page5 h2" , {
  color: "#EDBFFF"
})
// tl6.fromTo(splitHeadline.chars, 
//   { color: "#000", opacity: 0 },  // Initial state: black text, invisible
//   { color: "#000", opacity: 1, stagger: 0.05, duration: 2 } // Color changes and becomes visible
// );

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      crsr.style.transition = "width 0.4s ease, height 0.4s ease, border-radius 0.4s ease";
        var att = elem.getAttribute("data-image")
        crsr.style.width = "400px"
        crsr.style.height = "300px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "25px";  
        crsr.style.height = "25px";
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var circle = document.querySelector("#contact")
circle.addEventListener("mouseenter", function(){
  circle.style.height= "200px"
  circle.style.width= "200px"
})
circle.addEventListener("mouseleave", function(){
  circle.style.height= "150px"
  circle.style.width= "150px"
})

// var h4 = document.querySelectorAll("#nav-part2 h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         purple.style.display = "block"   
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         purple.style.display = "none"   
//         purple.style.opacity = "0"
//     })
// })






