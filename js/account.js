document.addEventListener("DOMContentLoaded", function() {
    const
        btnSent = document.querySelector('.account__btn_sent'),
        btnWork = document.querySelector('.account__btn_inwork'),
        btnDone = document.querySelector('.account__btn_done'),
        btnSet = document.querySelector('.account__btn_set'),
        btnCompleted = document.querySelector('.account__btn_completed'),
        report = document.querySelector('.report'),
        test = document.querySelector('.test');

    btnSent.addEventListener('click', function() {
        report.classList.toggle('visible');
        test.classList.remove('visible')
    });
    btnSet.addEventListener('click', function() {
        test.classList.toggle('visible');
        report.classList.remove('visible');
    });
});