//personal choice button
let personal_link = document.getElementById('personal-link1');
let personal_link2 = document.getElementById('personal-link2');
let personalburger1 = document.getElementById('personal-burger1');
let personalburger2 = document.getElementById('personal-burger2');
personalburger1.addEventListener("click", function (event) {
  event.preventDefault();
  personalburger1.classList.add("menupersonal-active");
  personalburger2.classList.remove("menupersonal-active");
});
personalburger2.addEventListener("click", function (event) {
  event.preventDefault();
  personalburger1.classList.remove("menupersonal-active");
  personalburger2.classList.add("menupersonal-active");
});
personal_link2.addEventListener("click", function (event) {
  event.preventDefault();
  personal_link.classList.remove("hdr-per-active");
  personal_link2.classList.add("hdr-per-active");
});
personal_link.addEventListener("click", function (event) {
  event.preventDefault();
  personal_link.classList.add("hdr-per-active");
  personal_link2.classList.remove("hdr-per-active");
});
//.......................................................................................

//a link prevent default
let aTags1 = document.querySelectorAll('.footer a');
aTags1.forEach(function (aTag) {
  aTag.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
let aTags2 = document.querySelectorAll('.network-loan a');
aTags2.forEach(function (aTag) {
  aTag.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
let aTags3 = document.querySelectorAll('.news a');
aTags3.forEach(function (aTag) {
  aTag.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
let aTags4 = document.querySelectorAll('.appbar a');
aTags4.forEach(function (aTag) {
  aTag.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
let aTags5 = document.querySelectorAll('.appbar2 a');
aTags5.forEach(function (aTag) {
  aTag.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
let aTags6 = document.querySelectorAll('.statistics-bars a');
aTags6.forEach(function (aTag) {
  aTag.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
let humanres = document.querySelectorAll('.ser_net-content a');
humanres.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
// Search part js 
let aTags7 = document.querySelector('.hdr-right .hdr-search a');
let searchBtn = document.querySelector('.searchsec');
let searchBtn2 = document.querySelector('.searchsec .search-wrapper');
let searchClose = document.querySelector('.search-body-close span');
aTags7.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  searchBtn.classList.toggle('d-none');
  document.body.style.overflow = "hidden";
  if(!searchBtn.classList.contains('d-none')){
    setTimeout(() => {
      document.querySelector('.search-footer').style.height = "220px";
      document.querySelector('.search-footer').style.opacity = "1";
    }, 800);
  }
  else{
    document.querySelector('.search-footer').style.height = "0";
    document.querySelector('.search-footer').style.opacity = "0";
    document.body.style.overflow = "auto";
  }
  document.addEventListener('click', function (event) {
    if (!searchBtn2.contains(event.target)) {
      searchBtn.classList.add('d-none');
      document.body.style.overflow = "auto";
      document.querySelector('.search-footer').style.height = "0";
      document.querySelector('.search-footer').style.opacity = "0";
    }
  });
  searchClose.onclick = function () {
    searchBtn.classList.toggle('d-none');
    document.body.style.overflow = "auto";
    document.querySelector('.search-footer').style.height = "0";
    document.querySelector('.search-footer').style.opacity = "0";
  }
});
//...................................................................................

// let currencyUsd = document.getElementById('usd');
// let currencyGbp = document.getElementById('gbp');
// let currencyRub = document.getElementById('rub');
// let currencyEur = document.getElementById('eur');
// let currencyAzn = document.getElementById('azn');
let selectElement = document.getElementById('currency_select');
let flagElement = document.querySelector('.select-flag span');
let selectElement2 = document.getElementById('currency_select2');
let flagElement2 = document.querySelector('.select-flag2 span');
selectElement.addEventListener("change", () => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  switch (selectedOption.id) {
    case "usd":
      flagElement.style.backgroundImage = "url(https://unibank.az/assets/images/usd.png)";
      break;
    case "gbp":
      flagElement.style.backgroundImage = "url(https://unibank.az/assets/images/gbp.png)";
      break;
    case "rub":
      flagElement.style.backgroundImage = "url(https://unibank.az/assets/images/rub.png)";
      break;
    case "eur":
      flagElement.style.backgroundImage = "url(https://unibank.az/assets/images/euro.png)";
      break;
    case "azn":
      flagElement.style.backgroundImage = "url(https://unibank.az/assets/images/azn.png)";
      break;
    default:
      flagElement.style.backgroundImage = "none";
      break;
  }
});
selectElement2.addEventListener("change", () => {
  const selectedOption = selectElement2.options[selectElement2.selectedIndex];

  switch (selectedOption.id) {
    case "usd":
      flagElement2.style.backgroundImage = "url(https://unibank.az/assets/images/usd.png)";
      break;
    case "gbp":
      flagElement2.style.backgroundImage = "url(https://unibank.az/assets/images/gbp.png)";
      break;
    case "rub":
      flagElement2.style.backgroundImage = "url(https://unibank.az/assets/images/rub.png)";
      break;
    case "eur":
      flagElement2.style.backgroundImage = "url(https://unibank.az/assets/images/euro.png)";
      break;
    case "azn":
      flagElement2.style.backgroundImage = "url(https://unibank.az/assets/images/azn.png)";
      break;
    default:
      flagElement2.style.backgroundImage = "none";
      break;
  }
});

function convertCurrency() {
  let currencySelect = document.getElementById("currency_select");
  let selectedCurrency = currencySelect.options[currencySelect.selectedIndex].value;
  let amount = Number(document.getElementById("currency-value").value);
  const rates = {
    "USD": 1,
    "GBP": 0.72,
    "RUB": 72.72,
    "EUR": 0.83,
    "AZN": 1.70
  };
  const rate = rates[selectedCurrency];
  let convertedValue = amount * rate;
  if (!isNaN(convertedValue)) {
    document.getElementById("converted-value").value = convertedValue.toFixed(2);
  } else {
    document.getElementById("converted-value").value = "";
  }
}







