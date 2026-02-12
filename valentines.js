const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const loveMusic = document.getElementById("loveMusic");


// Make NO button run away 😈
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button action 💚
yesBtn.addEventListener("click", () => {
    popup.classList.add("show");
    loveMusic.play();
});

// Close popup
closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
    loveMusic.pause();
    loveMusic.currentTime = 0;
});

const heartsContainer = document.querySelector(".hearts");

function createHeart(isPopup = false) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (isPopup ? 3 : 6) + Math.random() * 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Hearts on main page
setInterval(() => createHeart(false), 600);

// More hearts when popup shows (flying video effect)
yesBtn.addEventListener("click", () => {
    popup.classList.add("show");

    popupHeartInterval = setInterval(() => createHeart(true), 200);
});

closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
    clearInterval(popupHeartInterval);
});

const isMobile = window.innerWidth <= 768;
let noBtnTimeout;

// Desktop behavior (run away)
if (!isMobile) {
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;

        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Mobile behavior (disappear 😈)
if (isMobile) {
    noBtn.addEventListener("touchstart", () => {
        noBtn.classList.add("hide");

        clearTimeout(noBtnTimeout);
        noBtnTimeout = setTimeout(() => {
            noBtn.classList.remove("hide");
        }, 1500); // reappears after she stops trying
    });
}
