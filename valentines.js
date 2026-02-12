const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Make NO button run away 😈
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button action 💚
yesBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

// Close popup
closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});
