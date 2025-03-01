document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();

    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    setTimeout(function() {
        window.location.href = event.target.href;
    }, 500); // 2 секунды задержки
});