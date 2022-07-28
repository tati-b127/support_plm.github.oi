document.addEventListener("DOMContentLoaded", function() {
    const serverData = async() => {
        const response = await fetch('https://tati-b127.github.io/support_plm.github.oi/test/menu_v2.json', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
            'Accept': 'application/json, text/plain, */*' ,
            'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        // console.log(data);

        const menuBlock = document.querySelector('.menu__block');
        const menuList = document.createElement('ul');
        const category = document.querySelector('.category');
        menuBlock.append(menuList);


        data.forEach(element => {
            const menuItem = document.createElement('li');
            const menuBtn = document.createElement('button');
            const menuTitle = document.createElement('h2');
            const menuDescr = document.createElement('p');
            const btnImg = document.createElement('img');

            const categoryGroup = document.createElement('div');
            const categoryList = document.createElement('ul');

            btnImg.src = `../img/${element.branchCode}.svg`;
            menuList.classList.add('menu__list');
            menuItem.classList.add('menu__item');
            menuBtn.classList.add('menu__btn');
            menuBtn.dataset.path = element.branchCode;
            menuTitle.classList.add('menu__title');
            menuDescr.classList.add('menu__descr');

            categoryGroup.classList.add('category__group');
            categoryList.classList.add('category__list');

            menuTitle.innerText = element.branchName;
            menuDescr.innerText = element.description;

            categoryGroup.dataset.target = element.branchCode;

            let temp = element.children;
            temp.forEach(i => {
                const categoryLink = document.createElement('a');
                const categoryItem = document.createElement('li');
                categoryItem.classList.add('category__item');
                categoryLink.classList.add('category__link');

                categoryLink.innerText = i.branchName;
                categoryLink.setAttribute('name', element.branchName)
                categoryItem.append(categoryLink)
                categoryList.append(categoryItem)
            })

            menuBtn.append(btnImg, menuTitle, menuDescr);
            menuItem.append(menuBtn);
            menuList.append(menuItem);
            categoryGroup.append(categoryList);
            category.append(categoryGroup);

            const menuBtns = document.querySelectorAll('.menu__btn');
            const categoryGroups = document.querySelectorAll('.category__group')
            const inputReset = document.querySelectorAll('.form-control')
            const resetMenu = document.querySelector('.reset');

            menuBtns.forEach(function(tabLink) {
                tabLink.addEventListener('click', function(event) {
                    let path = event.currentTarget.dataset.path;

                    menuBtns.forEach(function(resetSelect) {
                        resetSelect.classList.remove('menu__btn_active');
                        event.currentTarget.classList.add('menu__btn_active');
                        requestForm.classList.add('hidden');
                        for (i of inputReset) i.value = '';


                    })
                    categoryGroups.forEach(function(content) {
                        let targ = content.dataset.target
                        if (path === targ) {
                            content.classList.add('category__group_visible');
                        } else {
                            content.classList.remove('category__group_visible');
                        }
                    })
                })
            })
            const requestForm = document.querySelector('.request')
            const categoryLinks = document.querySelectorAll('.category__link')

            categoryLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    let
                    // theme = this.outerText,
                    // parent = this.parentElement.parentElement.parentElement,
                    // category = this.getAttribute('name');
                        theme = this.innerText,
                        parent = this.parentElement.parentElement.parentElement,
                        category = this.getAttribute('name');
                    // console.log(parent)


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
    };
    serverData();
})
