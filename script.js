let card1 =document.querySelector(".card1")
let card2 =document.querySelector(".card2")
let card3 =document.querySelector(".card3")
let card4 =document.querySelector(".card4")
let card5 =document.querySelector(".card5")
let card6 =document.querySelector(".card6")
let h1 = document.querySelector(".content1 h1")
let p = document.querySelector(".content1 p")

let h2 = document.querySelector(".content2 h1")
let p2 = document.querySelector(".content2 p")

let h3 = document.querySelector(".content3 h1")
let p3 = document.querySelector(".content3 p")

let h4 = document.querySelector(".content4 h1")
let p4= document.querySelector(".content4 p")

let h5 = document.querySelector(".content5 h1")
let p5 = document.querySelector(".content5 p")

let h6 = document.querySelector(".content6 h1")
let p6 = document.querySelector(".content6 p")




card1.addEventListener("mouseover",function(){
    h1.style.color = "black"
    p.style.color = "black"
})

card1.addEventListener("mouseleave",function(){
    h1.style.color = "white"
    p.style.color = "white"
})


card2.addEventListener("mouseover",function(){
    h2.style.color = "black"
    p2.style.color = "black"
})

card2.addEventListener("mouseleave",function(){
    h2.style.color = "white"
    p2.style.color = "white"
})

card3.addEventListener("mouseover",function(){
    h3.style.color = "black"
    p3.style.color = "black"
})

card3.addEventListener("mouseleave",function(){
    h3.style.color = "white"
    p3.style.color = "white"
})

card4.addEventListener("mouseover",function(){
    h4.style.color = "black"
    p4.style.color = "black"
})

card4.addEventListener("mouseleave",function(){
    h4.style.color = "white"
    p4.style.color = "white"
})


card5.addEventListener("mouseover",function(){
    h5.style.color = "black"
    p5.style.color = "black"
})

card5.addEventListener("mouseleave",function(){
    h5.style.color = "white"
    p5.style.color = "white"
})


card6.addEventListener("mouseover",function(){
    h6.style.color = "black"
    p6.style.color = "black"
})

card6.addEventListener("mouseleave",function(){
    h6.style.color = "white"
    p6.style.color = "white"
})



$(document).ready(function(){
 
$('.images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 2000,
  });
});

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
