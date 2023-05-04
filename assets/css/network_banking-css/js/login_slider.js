let btn1 = document.getElementById('dot1');
let btn2 = document.getElementById('dot2');
let slideImg = document.getElementById("1");
let slideImg2 = document.getElementById("2");
btn2.onclick = function () {
    slideImg2.classList.remove('d-none');
    slideImg.classList.add('d-none');
    slideImg.style.left = "-200px";
    slideImg.style.opacity = ".2";
    setTimeout(function () {
        slideImg2.style.left = "0px";
        slideImg2.style.opacity = "1";
        slideImg2.classList.remove('slide-card');
    }, 0);
    btn1.classList.remove('active-dot');
    btn2.classList.add('active-dot');
}
btn1.onclick = function () {
    slideImg2.classList.add('d-none');
    slideImg.classList.remove('d-none');
    slideImg2.style.left = "-200px";
    slideImg2.style.opacity = ".2";
    setTimeout(function () {
        slideImg.style.left = "0px";
        slideImg.style.opacity = "1";
        slideImg.classList.remove('slide-card');
    }, 0);
    btn2.classList.remove('active-dot');
    btn1.classList.add('active-dot');
}

AOS.init();
