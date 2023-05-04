let tabmenu = document.querySelectorAll('.ser_net-links a');
let tabmenu_mob = document.querySelectorAll('.ser_net-links-mob a');
for (let i = 0; i < tabmenu.length; i++) {
    tabmenu[i].addEventListener('click', function () {
        for (let j = 0; j < tabmenu.length; j++) {
            tabmenu[j].classList.remove('sibiling-item-active');
        }
        this.classList.add('sibiling-item-active');
    });
};
for (let i = 0; i < tabmenu_mob.length; i++) {
    tabmenu_mob[i].addEventListener('click', function () {
        for (let j = 0; j < tabmenu_mob.length; j++) {
            tabmenu_mob[j].classList.remove('sibiling-item-active');
        }
        this.classList.add('sibiling-item-active');
    });
};