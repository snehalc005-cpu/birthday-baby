/* =========================
   OPEN BIRTHDAY SURPRISE
========================= */

const openButton =
    document.getElementById("openBtn");

const birthdaySection =
    document.getElementById("birthday");

openButton.addEventListener("click", function () {

    birthdaySection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   CONTINUE TO MEMORIES
========================= */

const continueButton =
    document.getElementById("continueBtn");

continueButton.addEventListener("click", function () {

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   CONTINUE FROM LETTER
========================= */

const letterButton =
    document.getElementById("letterButton");

letterButton.addEventListener("click", function () {

    document.getElementById("final").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".photo-card, .letter-card, .final-content"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   FINAL FLOATING HEARTS
========================= */

function createFinalHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (18 + Math.random() * 22) + "px";

    heart.style.color = "#e5a6b1";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";


    document.body.appendChild(heart);


    const duration =
        3000 + Math.random() * 2500;


    heart.animate(

        [
            {
                transform:
                    "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                transform:
                    "translateY(-50vh) rotate(20deg)",
                opacity: 0.8
            },

            {
                transform:
                    "translateY(-110vh) rotate(-20deg)",
                opacity: 0
            }
        ],

        {
            duration: duration,
            easing: "ease-out"
        }

    );


    setTimeout(function () {

        heart.remove();

    }, duration);

}


let heartsStarted = false;


const finalSection =
    document.getElementById("final");


const finalObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (
                    entry.isIntersecting &&
                    !heartsStarted
                ) {

                    heartsStarted = true;


                    for (
                        let i = 0;
                        i < 18;
                        i++
                    ) {

                        setTimeout(function () {

                            createFinalHeart();

                        }, i * 180);

                    }

                }

            });

        },

        {
            threshold: 0.35
        }

    );


finalObserver.observe(finalSection);
