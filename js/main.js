document.addEventListener("DOMContentLoaded", function() {

    const
        menuBtns = document.querySelectorAll('.menu__btn'),
        categoryGroups = document.querySelectorAll('.category__group'),
        categoryLinks = document.querySelectorAll('.category__link'),
        requestForm = document.querySelector('.request'),
        inputReset = document.querySelectorAll('.form-control'),
        resetMenu = document.querySelector('.reset');

    menuBtns.forEach(tabLink => {
        tabLink.addEventListener('click', function(event) {
            menuBtns.forEach(resetSelect => {
                resetSelect.classList.remove('menu__btn_active');
                requestForm.classList.add('hidden');
                for (i of inputReset) i.value = '';
            })
            let path = event.currentTarget.dataset.path;
            event.currentTarget.classList.add('menu__btn_active');
            categoryGroups.forEach(resetContent => {
                resetContent.classList.remove('category__group_visible')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add("category__group_visible");
        })
    })
    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            let
                theme = this.outerText,
                parent = this.parentElement.parentElement.parentElement,
                category = this.getAttribute('name');

            for (i of inputReset) i.value = '';
            requestForm.classList.remove('hidden');
            parent.classList.remove('category__group_visible');
            document.querySelector('.request__category').setAttribute('value', category);
            document.querySelector('.request__theme-descr').setAttribute('value', theme);

            document.querySelector('.request__btn_reset').addEventListener("click", function(resetForm) {
                requestForm.classList.add('hidden');
            });
            parent.classList.add('category__group_visible');
        });
    });
    resetMenu.addEventListener('click', function() {
        if (requestForm.classList.contains('hidden')) {
            for (i of categoryGroups) {
                i.classList.remove('category__group_visible');
            };
            for (i of menuBtns) {
                i.classList.remove('menu__btn_active');
            };
        } else {
            return requestForm;
        };
    });
});