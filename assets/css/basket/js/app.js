if(localStorage.getItem('products') === null){
    localStorage.setItem('products', JSON.stringify([]));
}
let buttons = document.querySelectorAll('.basket-add');

for(let btn of buttons){
    btn.onclick = function(e){
        e.preventDefault();
        let id = this.parentElement.parentElement.parentElement.id;
        let src = this.parentElement.parentElement.parentElement.children[0].src;
        let pr_name = this.parentElement.parentElement.children[0].innerHTML;
        let pr_price = this.parentElement.parentElement.children[1].innerHTML;
        
        let product_list = JSON.parse(localStorage.getItem('products'));
        let existProd = product_list.find(item => item.Id === id);
        if(existProd === undefined){
            product_list.push({
                Id: id,
                Image: src,
                Name: pr_name,
                Price: pr_price,
                Count: 1
            })
        }
        else{
            existProd.Count += 1;
        }
        localStorage.setItem('products',JSON.stringify(product_list));
        ShowCount();
    }
}
function ShowCount(){
    let product_list = JSON.parse(localStorage.getItem('products'));
    document.querySelector('#product_count').innerHTML = product_list.length;
}
ShowCount();