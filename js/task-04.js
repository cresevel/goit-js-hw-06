
  let counterValue = 0;

  const valueSpan = document.getElementById('value');
  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');

  decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
  });

  incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
  });

  function updateCounter() {
    valueSpan.textContent = counterValue;
  }
