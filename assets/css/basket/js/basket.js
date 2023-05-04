let product_list = JSON.parse(localStorage.getItem('products'));

if (product_list.length > 0) {
  document.querySelector('.alert').classList.add('d-none');
  document.getElementById('Pr_list').classList.remove('d-none');
}
else {
  document.querySelector('.alert').classList.remove('d-none');
  document.getElementById('Pr_list').classList.add('d-none');
}

function GetProduct() {
    let product_list = JSON.parse(localStorage.getItem('products'));
    let x = '';
    product_list.forEach(item => {
      x += `
          <div id=${item.Id} class="card-basket mb-5">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${item.Image} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="btn-order col-md-8 d-flex align-items-center">
        <div class="card-body col-12">
          <h5 class="card-title">${item.Name}</h5>
          <p class="card-text">${item.Price}</p>
          <button class="btn-Decrement">-</button>
          <input class="txtCount" type="text" value="${item.Count}">
          <button class="btn-Increment">+</button>
          <a href="" class="btn2 btn btn-danger"><i class="fa-regular fa-trash-can"></i></a>
        </div>
        <div>
        <button class="btn btn-success">Sifarişi tamamla</button>
        </div>
      </div>
    </div>
  </div>
          `
    })
    document.querySelector('.rowlist').innerHTML = x;
    function displayTotalCount() {
        let product_list = JSON.parse(localStorage.getItem('products'));
        let totalCount = 0;
        product_list.forEach(item => {
          totalCount += item.Count;
        });
        document.querySelector('#product_count2').innerHTML = `məhsulun ümumi sayı: ${totalCount}`;
      }
      displayTotalCount();

      function displayTotalPrice() {
        let product_list = JSON.parse(localStorage.getItem('products'));
        let totalPrice = 0;
        product_list.forEach(item => {
          let price = parseFloat(item.Price.split(' ')[0]);
          totalPrice += item.Count * price;
        });
        document.querySelector('.pr-all-price').innerHTML = `ümumi məhsulun qiyməti: ${totalPrice} AZN`;
      }
      displayTotalPrice();
  }
  GetProduct();

  let delete_pr = document.querySelectorAll('.btn2');
delete_pr.forEach(item => {
  item.addEventListener('click', function(e){
    e.preventDefault();
    let id = this.parentElement.parentElement.parentElement.parentElement.id;
    let product_list = JSON.parse(localStorage.getItem('products'));
    localStorage.setItem('products', JSON.stringify(product_list.filter(item => item.Id !== id)));
    location.reload();
  })
}) 

let Decrement = document.querySelectorAll('.btn-Decrement');
let Increment = document.querySelectorAll('.btn-Increment');
function decrementProductCount() {
  function decrement_pr(e) {
    e.preventDefault();
    let id = this.parentElement.parentElement.parentElement.parentElement.id;
    let product_List = JSON.parse(localStorage.getItem('products'));
    let new_pr = product_List.map(item => {
      if (item.Id === id) {
        if(item.Count > 1)
        item.Count--;
      }
      return item;
    })
    localStorage.setItem('products', JSON.stringify(new_pr));
    location.reload();
  }
  Decrement.forEach(item => {
    item.addEventListener('click', decrement_pr);
  });
}
decrementProductCount();

function incrementProductCount() {
  function increment_pr(e) {
    e.preventDefault();
    let id = this.parentElement.parentElement.parentElement.parentElement.id;
    let product_List = JSON.parse(localStorage.getItem('products'));
    let new_pr = product_List.map(item => {
      if (item.Id === id) {
        item.Count++;
      }
      return item;
    })
    localStorage.setItem('products', JSON.stringify(new_pr));
    location.reload();
  }
  Increment.forEach(item => {
    item.addEventListener('click', increment_pr);
  });
}
incrementProductCount();

