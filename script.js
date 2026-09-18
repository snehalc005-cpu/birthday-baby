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


