//header fin-kod and asan imza effects
let asanSignature = document.querySelector('.login-type');
let finCode = document.querySelector('.login-type-active');
let borBTM1 = document.querySelector('.login-type-active .login-type-inner span');
let borBTM2 = document.querySelector('.login-type .login-type-inner span');
asanSignature.onclick = function (e) {
    e.preventDefault();
    document.querySelector('.login-inputs').classList.add('d-none');
    document.querySelector('.login-bottom-inputs').classList.add('d-none');
    asanSignature.style.border = "1px solid #ff9500";
    finCode.style.border = "1px solid #d2d2d2";
    borBTM1.style.borderBottom = "none";
    borBTM2.style.borderBottom = "1px solid #fd9b00";
    document.querySelector('.asan-signature').classList.remove('d-none');
}
finCode.onclick = function (e) {
    e.preventDefault();
    document.querySelector('.login-inputs').classList.remove('d-none');
    document.querySelector('.login-bottom-inputs').classList.remove('d-none');
    finCode.style.border = "1px solid #ff9500";
    asanSignature.style.border = "1px solid #d2d2d2";
    borBTM1.style.borderBottom = "1px solid #fd9b00";
    borBTM2.style.borderBottom = "none";
    document.querySelector('.asan-signature').classList.add('d-none');
}
//.......................................................................................
//input not number user
let numInput = document.querySelector('#asan1 input');
numInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
let numInput2 = document.querySelector('#asan2 input');
numInput2.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
//......................................................................................
//Asan Imza input effects
let label = document.getElementById('asan1');
label.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('#asan1 .content-name').style.width = "50%";
    document.querySelector('#asan1 .content-name2').style.width = "50%";
    document.querySelector('#asan2 .content-name').style.width = "0%";
    document.querySelector('#asan2 .content-name2').style.width = "0%";
    document.querySelector('#asan1 label').style.top = "-15px";
    document.querySelector('#asan1 label').style.color = "#e28116";
    document.querySelector('#asan1 label').style.fontSize = "14px";
    document.querySelector('#asan2 label').style.top = "10px";
    document.querySelector('#asan2 label').style.color = "#999";
    document.querySelector('#asan2 label').style.fontSize = "18px";
});
let label2 = document.getElementById('asan2');
label2.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('#asan2 .content-name').style.width = "50%";
    document.querySelector('#asan2 .content-name2').style.width = "50%";
    document.querySelector('#asan1 .content-name').style.width = "0%";
    document.querySelector('#asan1 .content-name2').style.width = "0%";
    document.querySelector('#asan2 label').style.top = "-15px";
    document.querySelector('#asan2 label').style.color = "#e28116";
    document.querySelector('#asan2 label').style.fontSize = "14px";
    document.querySelector('#asan1 label').style.top = "10px";
    document.querySelector('#asan1 label').style.color = "#999";
    document.querySelector('#asan1 label').style.fontSize = "18px";
});
document.addEventListener('click', function (event) {
    if (event.target !== label) {
        document.querySelector('#asan1 .content-name').style.width = "0%";
        document.querySelector('#asan1 .content-name2').style.width = "0%";
        document.querySelector('#asan1 label').style.top = "10px";
        document.querySelector('#asan1 label').style.color = "#999";
        document.querySelector('#asan1 label').style.fontSize = "18px";
    }
    if (event.target !== label2) {
        document.querySelector('#asan2 .content-name').style.width = "0%";
        document.querySelector('#asan2 .content-name2').style.width = "0%";
        document.querySelector('#asan2 label').style.top = "10px";
        document.querySelector('#asan2 label').style.color = "#999";
        document.querySelector('#asan2 label').style.fontSize = "18px";
    }
});
//.............................................................................................
//Fin-kod inputs effects
let btm1 = document.getElementById('btm1');
btm1.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('#btm1 .content-name').style.width = "50%";
    document.querySelector('#btm1 .content-name2').style.width = "50%";
    document.querySelector('#btm2 .content-name').style.width = "0%";
    document.querySelector('#btm2 .content-name2').style.width = "0%";
    document.querySelector('.code-type .login-input .content-name').style.width = "0%";
    document.querySelector('.code-type .login-input .content-name2').style.width = "0%";
});
let btm2 = document.getElementById('btm2');
btm2.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('#btm2 .content-name').style.width = "50%";
    document.querySelector('#btm2 .content-name2').style.width = "50%";
    document.querySelector('#btm1 .content-name').style.width = "0%";
    document.querySelector('#btm1 .content-name2').style.width = "0%";
    document.querySelector('.code-type .login-input .content-name').style.width = "0%";
    document.querySelector('.code-type .login-input .content-name2').style.width = "0%";
});
document.addEventListener('click', function (event) {
    if (event.target !== btm1) {
        document.querySelector('#btm1 .content-name').style.width = "0%";
        document.querySelector('#btm1 .content-name2').style.width = "0%";
    }
    if (event.target !== btm2) {
        document.querySelector('#btm2 .content-name').style.width = "0%";
        document.querySelector('#btm2 .content-name2').style.width = "0%";
    }
});
let codeInput = document.querySelector('.code-type .login-input');
codeInput.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.code-type .login-input .content-name').style.width = "50%";
    document.querySelector('.code-type .login-input .content-name2').style.width = "50%";
    document.querySelector('#btm2 .content-name').style.width = "0%";
    document.querySelector('#btm2 .content-name2').style.width = "0%";
    document.querySelector('.content-name').style.width = "0%";
    document.querySelector('.content-name2').style.width = "0%";
});
document.addEventListener('click', function (event) {
    if (event.target !== codeInput) {
        document.querySelector('.code-type .login-input .content-name').style.width = "0%";
        document.querySelector('.code-type .login-input .content-name2').style.width = "0%";
    }
})
//................................................................................................
//input icon hover img
let iconHover = document.querySelector('.login-input a img');
let hoverDiv = document.querySelector('.icon-hover');
let hoverImg = document.querySelector('.icon-hover img');
hoverDiv.style.position = 'fixed';
hoverDiv.style.top = '600px';
hoverDiv.style.left = '800px';
document.body.appendChild(hoverDiv);
hoverImg.style.position = 'absolute';
hoverImg.style.top = '20px';
hoverImg.style.left = '-350px';

iconHover.addEventListener('mousemove', (e) => {
    hoverDiv.classList.remove('d-none');
    const x = e.clientX - hoverDiv.offsetLeft;
    const y = e.clientY - hoverDiv.offsetTop;
    hoverImg.style.transform = `translate(${x / 1}px, ${y / 1}px)`;
});
iconHover.addEventListener('mouseleave', (e) => {
    hoverDiv.classList.add('d-none');
});
//.....................................................................................................
//language click effects
let lang = document.querySelectorAll('.login-header table tbody tr td form a');
let firstSelect = document.querySelector('.login-header table tbody tr td form');
lang.forEach(item => {
    item.addEventListener('click', () => {
        lang.forEach(tag => {
            tag.classList.remove('firstselect');
        });
        item.classList.add('firstselect');
    });
});
//......................................................................................................








