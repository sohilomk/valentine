function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

function startAnimations() {
  createHearts();
  createFlowers();
  setTimeout(() => {
      alert("You make my heart bloom every day! Will you be mine? 🌹❤️");
  }, 2000);
}

function createHearts() {
  const hearts = ['❤️', '💖', '💝', '💘', '💕'];
  for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(heart);
      
      // Remove heart after animation
      heart.addEventListener('animationend', () => {
          heart.remove();
      });
  }
}

function createFlowers() {
  const flowers = ['🌸', '🌺', '🌻', '🌼', '🌷'];
  for (let i = 0; i < 15; i++) {
      const flower = document.createElement('div');
      flower.className = 'flower-pop';
      flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.top = Math.random() * 100 + 'vh';
      document.body.appendChild(flower);
      
      // Remove flower after animation
      flower.addEventListener('animationend', () => {
          flower.remove();
      });
  }
}