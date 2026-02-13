const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const loveText = document.getElementById("loveText");

let noScale = 1;

// Bouton NO qui fuit + rétrécit
noBtn.addEventListener("mouseover", () => {

  // Il fuit
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Il rétrécit
  noScale -= 0.1;
  if (noScale < 0.3) noScale = 0.3;
  noBtn.style.transform = `scale(${noScale})`;
});


// Animation bras ouverts
function openArms() {
  document.getElementById("armLeft").setAttribute("x2", 0);
  document.getElementById("armRight").setAttribute("x2", 200);
}


// Clic YES
yesBtn.addEventListener("click", () => {
  openArms();
  loveText.style.display = "block";
  createHearts();
});


// Pluie de cœurs
function createHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "24px";
    document.body.appendChild(heart);

    heart.animate(
      [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(-800px)", opacity: 0 }
      ],
      { duration: 3000 }
    );

    setTimeout(() => heart.remove(), 3000);
  }
}
