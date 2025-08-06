
document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.typed-me');

    const strings = [];
    for (let i = 0; i < 100; i++) {
        const value = element.getAttribute(`data-string${i}`);
        if (!value) break;
        strings.push(value);
    }

    new Typed('.typed-me', {
        strings: strings,
        typeSpeed: parseInt(element.getAttribute('data-type-speed')) || 60,
        startDelay: parseInt(element.getAttribute('data-start-delay')) || 0,
        backSpeed: parseInt(element.getAttribute('data-back-speed')) || 60,
        backDelay: parseInt(element.getAttribute('data-back-delay')) || 800,
        loop: element.getAttribute('data-loop') === '1'
    });
});

