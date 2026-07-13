const openLetter = document.getElementById("openLetter");
const continueBtn = document.getElementById("continueBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

const hero = document.querySelector(".hero");
const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const final = document.getElementById("final");

const typingText = document.getElementById("typingText");

const message = `I just want you to know that you deserve every beautiful thing life has to offer.

May your smile never fade,
may your heart always be full of peace,
and may every dream you have slowly become reality.

Thank you for being such a wonderful person.

Keep shining,
keep smiling,
and always believe in yourself.

Happy Birthday once again. ❤️`;

openLetter.addEventListener("click", () => {

    hero.classList.add("hidden");

    letter1.classList.remove("hidden");

});

continueBtn.addEventListener("click", () => {

    letter1.classList.add("hidden");

    letter2.classList.remove("hidden");

    typeWriter();

});

function typeWriter() {

    let i = 0;

    typingText.innerHTML = "";

    function typing() {

        if (i < message.length) {

            typingText.innerHTML += message.charAt(i);

            i++;

            setTimeout(typing, 35);

        } else {

            surpriseBtn.classList.remove("hidden");

        }

    }

    typing();

}

surpriseBtn.addEventListener("click", () => {

    letter2.classList.add("hidden");

    final.classList.remove("hidden");

    startConfetti();

});

function startConfetti() {

    const canvas = document.getElementById("confetti");

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 200; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            r: Math.random() * 6 + 2,

            d: Math.random() * 5 + 2,

            color: [
                "#F5D3D8",
                "#D89AA6",
                "#BE7583",
                "#FFF8F8",
                "#FFD6DF"
            ][Math.floor(Math.random() * 5)]

        });

    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {

            ctx.beginPath();

            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

            ctx.fillStyle = p.color;

            ctx.fill();

        });

        update();

        requestAnimationFrame(draw);

    }

    function update() {

        pieces.forEach(p => {

            p.y += p.d;

            if (p.y > canvas.height) {

                p.y = -10;

                p.x = Math.random() * canvas.width;

            }

        });

    }

    draw();

}

window.addEventListener("resize", () => {

    const canvas = document.getElementById("confetti");

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});
