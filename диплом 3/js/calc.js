function calculateCost() {
  const weight = parseFloat(document.getElementById('weight').value);
  const zone = document.getElementById('zone').value;
  let cost = 0;

  if (zone === 'city') {
    if (weight <= 1) cost = 250;
    else if (weight <= 5) cost = 400;
    else cost = 600;
  } else if (zone === 'intercity') {
    if (weight <= 5) cost = 700;
    else cost = 1000;
  }

  document.getElementById('result').innerText = Стоимость доставки: ${cost} ₽;
}