const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const catImg = document.getElementById("cat-img");

const catImages = ["cat1.png", "cat2.png", "cat3.png", "cat4.png"]; // Ilagay ang filenames ng mga pusa
const messages = [
    "r u sure?:<< ",
    "d naba maaawat??",
    "pls??:((((",
    "Awa nalang oh? 🥺👉👈",
    "Last chance! 🥹",
    "makonsensya ka nmn:<<",
    "tigas nang puso ahh"
];

let currentCatIndex = 0;
let noCount = 0;

noBtn.addEventListener("click", () => {
    noCount++;
    yesBtn.style.transform = `scale(${1 + noCount * 0.3})`; // Palakihin ang Yes button

    if (noCount >= messages.length) {
        alert("Wala ka namang choice^^");
        return;
    }

    document.querySelector("h1").textContent = messages[noCount]; // Palitan ang tanong

    currentCatIndex = (currentCatIndex + 1) % catImages.length; // Palit image
    catImg.src = catImages[currentCatIndex];
});

yesBtn.addEventListener("click", () => {
    alert("Plus 10 ka kay lord ❤️");
});
