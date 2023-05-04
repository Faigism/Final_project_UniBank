let burgerbtn = document.querySelector('.hdr-menu');
let menubar = document.querySelector('.burger-menu');
burgerbtn.addEventListener('click', function(){
    menubar.classList.toggle('d-none');
    if(menubar.classList.contains('d-none')){
        document.body.style.overflow = "auto";
        setTimeout(() => {
            menubar.style.height = "0"
        }, 0);
    }
    else{
        setTimeout(() => {
            menubar.style.height = "calc(100vh - 20px)"
        }, 0);
        document.body.style.overflow = "hidden";
    }
});

