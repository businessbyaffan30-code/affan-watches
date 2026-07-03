// Welcome Message
window.onload = function () {
    alert("Welcome to AFFAN WATCHES");
};

// Smooth Animation on Scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (top < screen - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";
});

// Button Hover Effect
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.boxShadow = "0 0 20px gold";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.boxShadow = "none";
    });
});
// Search Watch

function searchWatch(){

let input=document.getElementById("searchInput").value.toUpperCase();

let card=document.getElementsByClassName("card");

for(let i=0;i<card.length;i++){

let title=card[i].getElementsByTagName("h2")[0];

if(title.innerHTML.toUpperCase().indexOf(input)>-1){

card[i].style.display="block";

}

else{

card[i].style.display="none";

}

}

}


// Back To Top

let mybutton=document.getElementById("topBtn");

window.onscroll=function(){

scrollFunction();

}

function scrollFunction(){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

mybutton.style.display="block";

}

else{

mybutton.style.display="none";

}

}

function topFunction(){

document.body.scrollTop=0;

document.documentElement.scrollTop=0;

}
function changeImage(image){

document.getElementById("mkMain").src=image;

}window.addEventListener("load",function(){

document.getElementById("loader").style.display="none";

});
