const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

const setBothFromC = value => {
  celsius.value = value;
  fahrenheit.value = (32 + (9 / 5) * celsius.value).toFixed(1);
};

const setBothFromF = value => {
  fahrenheit.value = value;
  celsius.value = ((5 / 9) * (fahrenheit.value - 32)).toFixed(1);
};

celsius.addEventListener('input', e => setBothFromC(e.target.value));
fahrenheit.addEventListener('input', e => setBothFromF(e.target.value));

