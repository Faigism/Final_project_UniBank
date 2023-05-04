//body background-color change
let backgroundBody = document.querySelectorAll('.hdr-theme');
let moonIcon = document.getElementById('moonIcon');
let sunIcon = document.getElementById('sunIcon');
backgroundBody.forEach(item => {
  item.addEventListener('click', function () {
    document.body.classList.toggle('backgroundColor');
    moonIcon.classList.toggle('d-none');
    sunIcon.classList.toggle('d-none');
    document.querySelector('.burger-menu').classList.toggle('backgroundColor');
  });
});
//.......................................................................................