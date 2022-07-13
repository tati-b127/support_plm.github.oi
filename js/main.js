// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.menu__btn').forEach(function (tabLink) {
//         tabLink.addEventListener('click', function (event) {
//             const path = event.currentTarget.dataset.path;
//             document.querySelectorAll('.menu__btn').forEach(function (link) {
//                 link.classList.remove('menu__btn_active')
//             });
//             event.currentTarget.classList.add('menu__btn_active');
//             document.querySelectorAll('.category__group').forEach(function (tabContent) {
//                 tabContent.classList.remove('category__group_visible')
//             });
//             document.querySelector(`[data-target="${path}"]`).classList.add('category__group_visible');
//         });
//     });

// });
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu__btn').forEach(function (tabLink) {
        tabLink.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            console.log(path)
            document.querySelectorAll('.menu__btn').forEach(function (link) {
                link.classList.remove('menu__btn_active')
            });
            document.querySelector('.request').classList.add('hidden')
            event.currentTarget.classList.add('menu__btn_active');
            document.querySelectorAll('.category__group').forEach(function (tabContent) {
                tabContent.classList.remove('category__group_visible');
                // tabContent.addEventListener('click', function(e){

                //     let a = e.getAttribute('data-target');
                //     console.log(a)
                // })
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('category__group_visible');
        });
    });
    document.querySelectorAll('.category__link').forEach(function (link) {
        link.addEventListener('click', function (){
            let text = this.textContent
            console.log(text)
            document.querySelector('.category__group_visible').classList.toggle('category__group_visible');
            document.querySelector('.request').classList.toggle('hidden');
            let categor = this.getAttribute('name')
            // let atr = categor.getAttribute('data-target')
            console.log(categor)
            document.querySelector('.request__category').setAttribute('value', categor);
            document.querySelector('.request__theme-descr').setAttribute('value', text)
            })
        })
    });
    


    


// MESSAGE


// document.querySelectorAll('.category__group').forEach(function(group){
    
//     let a = group.getAttribute('data-target')
//     console.log(a)
// })
// document.querySelectorAll('.category__link').forEach(function (link) {
//     link.addEventListener('click', function (e){
//         let text = this.textContent
//         console.log(text)
//     })
// });

// let array = [a, text]
// console.log(array)

// function (asd) {
//     links.addEventListener('click', function(getAttr) {
//         let attr = getAttr.textContent;
//         console.log(attr);
//     })

// }
    // let category = document.querySelector('.category__link');
    // let title = document.querySelector('[data-target]');
    // this.querySelector.classList.add('visible');
    // document.querySelector('.request').classList.remove('visible');


