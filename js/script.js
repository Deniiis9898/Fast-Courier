function calculatePrice(event) {
  event.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  if (isNaN(weight) || weight <= 0) {
    document.getElementById('result').textContent = 'Введите корректный вес.';
    return;
  }
  const price = 200 + weight * 50;
  document.getElementById('result').textContent = `Примерная стоимость: ${price} ₽`;
}
