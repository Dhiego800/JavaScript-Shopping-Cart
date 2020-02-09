const carts = document.querySelectorAll('.add-cart');
const products = [
    {
      name: 'Grey Tshirt',
      tag: 'greytshit',
      price: 15,
      inCart: 0
    },
    {
      name: 'Grey Hoddie',
      tag: 'greyhoddie',
      price: 20,
      inCart: 0
    },
    {
      name: 'Black Tshirt',
      tag: 'blacktshirt',
      price: 15,
      inCart: 0
    },
    {
      name: 'Black Hoddie',
      tag: 'blackhoddie',
      price: 20,
      inCart: 0
    },
]

carts.forEach((cart) => {
    cart.addEventListener('click', () => {        
        cartNumbers()
    })
});

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  
  if( productNumbers ){
      document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  
  if( productNumbers ){
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
}

onLoadCartNumbers();