// Simple typing animation
const typingText = document.querySelector('.typing');
const words = ["Web Developer", "Designer", "Student"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (i >= words.length) i = 0;
    currentWord = words[i];

    if (!isDeleting) {
        typingText.textContent = currentWord.slice(0, j+1);
        j++;
        if (j === currentWord.length) { isDeleting = true; setTimeout(type, 1000); return; }
    } else {
        typingText.textContent = currentWord.slice(0, j-1);
        j--;
        if (j === 0) { isDeleting = false; i++; }
    }
    setTimeout(type, isDeleting ? 100 : 200);
}

type();
