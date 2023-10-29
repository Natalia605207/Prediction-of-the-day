gsap.from("#heading", {delay: 0.5, duration: 1.7, y: 100, ease: "power0.easeNone", opacity: 0})
gsap.from("#btn", {delay: 1.7, duration: 1.8, y: 40, ease: "power0.easeNone", opacity: 0})

const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const predictions = [
    "“If you want the rainbow, you gotta put up with the rain!” — Dolly Parton",
    "“One bad chapter doesn't mean your story is over.” — Unknown",
    "“You are not what you've done. You are what you keep doing.” — Jack Butcher",
    "“One person alone is not a full person; we exist in relation to others.” — Margaret Atwood",
    "“You must expect great things of yourself before you can do them.” — Michael Jordan",
    "“The road to success is always under construction.” — Lily Tomlin",
    "“Well behaved women seldom make history.” — Laurel Thatcher Ulrich",
    "“There is always something left to love.” — Gabriel Garcia Marquez",
    "“There are no regrets in life. Just lessons.” — Jennifer Aniston",
    "“The only impossible journey is the one you never begin.” — Anthony Robbins",
    "“Be bold, be courageous, be your best.” — Gabrielle Giffords",
    "“Everything has changed, and yet, I'm more me than I've ever been.” — Iain Thomas",
]

button.addEventListener('click', () => {
    let randomPredictions = predictions[Math.floor(Math.random() * predictions.length)];
    par.textContent = randomPredictions;
})