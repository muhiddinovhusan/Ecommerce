
const cartDiv = document.querySelector('.cart');

const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));


function displayProducts(products) {
    let str = '';
    products.forEach((product) => {
        str += `
        <div class="card">
        <img src="${product.images[0]}" alt="${product.name}" />
          <div class="card-content">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>${product.description}</p>
            <h3>${product.price}$</h3>


            <div id="divbtn">
            <button id="removebtn" onclick="removeFromCart(${product.id})"><i class="fa-solid fa-trash"></i>Remove</button>
            <button id="checkoutbtn">Checkout</button>
          </div>
           
            
            
         
          
          </div>
        </div>
      `;
    });
    cartDiv.innerHTML = str;
    
}
displayProducts(cartProducts);

function removeFromCart(productId) {
  if (confirm('Are you sure you want to remove this product?')) {
    const newCartProducts = cartProducts.filter((p) => p.id !== productId);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
    displayProducts(newCartProducts);
  }
}

const btn2 = document.getElementById('checkoutbtn');

btn2.addEventListener('click', function(){
  alert('rostan ham buni sotib olmoqchimisiz?')
})