const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('mainCard');
const successCard = document.getElementById('successCard');

// Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Show success message
yesBtn.addEventListener('click', () => {
    mainCard.classList.add('hidden');
    successCard.classList.remove('hidden');
});