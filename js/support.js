(() => {
    const serverData = async() => {
        // const pageParams = new URLSearchParams(window.location.search);
        const response = await fetch('../test/menu_v2.json', {
            method: 'GET'
        });
        const data = await response.json();
        // const jsonData = require('../test/menu_v2.json');

        console.log(data);


        // console.log(jsonData);
        // return data;
        const menuBlock = document.querySelector('.menu__block');
        const menuList = document.createElement('ul');
        menuBlock.append(menuList)

        data.forEach(element => {
            const menuItem = document.createElement('li');
            const menuBtn = document.createElement('button');
            const menuTitle = document.createElement('h2');
            const menuDescr = document.createElement('p');
            const btnImg = document.createElement('img');

            btnImg.src = `../img/${element.branchCode}.svg`;
            menuList.classList.add('menu__list');
            menuItem.classList.add('menu__item');
            menuBtn.classList.add('menu__btn');
            menuBtn.dataset.path = element.branchCode;
            console.log(menuBtn.path)

            menuTitle.classList.add('menu__title');
            menuDescr.classList.add('menu__descr');

            menuTitle.innerText = element.branchName;
            menuDescr.innerText = element.description;

            menuBtn.append(btnImg, menuTitle, menuDescr);
            menuItem.append(menuBtn);
            menuList.append(menuItem)
        });
        console.log(menuBlock)

    };

    serverData();



})()