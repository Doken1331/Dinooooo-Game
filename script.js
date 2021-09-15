const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let jump_html = document.getElementById('jump');
let jump_count = 0;

document.addEventListener("keydown", function(event) {
    jump();
})

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        jump_html.innerHTML = `Jump count: ${jump_count += 1}`;
    }
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 300)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert(`GAME OVER! \n\nJump count: ${jump_count}`);
        jump_html.innerHTML = `Jump count: ${jump_count = 0}`;
    }
}, 10)