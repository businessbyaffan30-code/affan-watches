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