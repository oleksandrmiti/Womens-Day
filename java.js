onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.animated_march_text');
    const texts = [
        "С Международным Женским Днем!", // Russian
        "З Міжнародним жіночим днем!",     // Ukrainian
        "Happy International Women's Day!", // English
        "Alles Gute zum Internationalen Frauentag!" // German
    ];
    let currentIndex = 0;

    function changeText() {
        textElements.forEach((element, index) => {
            element.textContent = texts[(currentIndex + index) % texts.length];
        });
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(changeText, 4000);
});