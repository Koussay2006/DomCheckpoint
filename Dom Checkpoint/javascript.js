// Function to update the total amount
function updateTotalAmount() {
  let totalAmount = 0;
  const itemInputs = document.querySelectorAll('.item-input');

  for (let i = 0; i < itemInputs.length; i++) {
    const inputValue = parseFloat(itemInputs[i].value);
    const price = parseFloat(itemInputs[i].parentNode.querySelector('.the-price-mouse, .the-price-keyboard-1, .the-price-keyboard-2, .the-price-keyboard-3').textContent.substr(1));

    if (!isNaN(inputValue)) {
      totalAmount += inputValue * price;
    }
  }

  document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

// Event listener to detect changes in the number inputs and update total amount
const itemInputs = document.querySelectorAll('.item-input');
for (let i = 0; i < itemInputs.length; i++) {
  itemInputs[i].addEventListener('input', updateTotalAmount);
}

// Function to remove the item when the corresponding "Remove" button is clicked
function removeItem(element) {
  const listItem = element.parentNode;
  const itemPrice = parseFloat(listItem.querySelector('.the-price-mouse, .the-price-keyboard-1, .the-price-keyboard-2, .the-price-keyboard-3').textContent.substr(1));
  const quantity = parseFloat(listItem.querySelector('.item-input').value);
  const cartItemsList = document.querySelector('.cart-items');

  if (!isNaN(quantity)) {
    const totalPrice = itemPrice * quantity;
    const totalAmountElement = document.getElementById('totalAmount');
    const currentTotalAmount = parseFloat(totalAmountElement.textContent);
    totalAmountElement.textContent = (currentTotalAmount - totalPrice).toFixed(2);
  }

  listItem.remove();
  updateTotalAmount();
}

// Event listener using event delegation to handle "Remove" button clicks
const theContainer = document.querySelector('.the-container');
theContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-btn')) {
    removeItem(event.target);
  }
});

