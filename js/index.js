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

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  console.log(event);

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', removeProduct)
  });
  //... your code goes here
});
