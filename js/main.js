document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu__btn').forEach(function (tabLink) {
        tabLink.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.menu__btn').forEach(function (link) {
                link.classList.remove('menu__btn_active')
            });
            event.currentTarget.classList.add('menu__btn_active');
            document.querySelectorAll('.category__group').forEach(function (tabContent) {
                tabContent.classList.remove('category__group_visible')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('category__group_visible');
        });
    });

});


// MESSAGE

// document.querySelectorAll('.category__link').forEach(function (link){
//     link.addEventListener('click', function (request) {
//     let category = document.querySelector('.category__link');
//     let title = document.querySelector('[data-target]');
    // document.querySelector('.request').classList.remove('visible');

// })
// })