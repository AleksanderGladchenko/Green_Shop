// connect to registrate connect to registrate connect to registrate connect to registrate connect to registrate connect to registrate

document.getElementById('loginLink').addEventListener('click', function (event) {
    event.preventDefault();

    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    setTimeout(function () {
        window.location.href = event.target.href;
    }, 500);
});

// slider slider slider slider slider slider slider slider slider slider slider slider slider slider slider slider slider slider slider

$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        1100: {
            items: 2
        }
    }

})