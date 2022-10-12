// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = parseInt(product.querySelector('.price span').innerText)
  let quantity = parseInt(product.querySelector('.quantity input').value)
  let result = price * quantity;
  console.log(price, quantity, result);
  product.querySelector('.subtotal span').innerText = result;
  return result;
}

function calculateAll() {
  let total = 0;
  document.querySelectorAll('.product').forEach(product => {
    total += updateSubtotal(product);
  });

  document.querySelector("#total-value span").innerText = total;
  
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
