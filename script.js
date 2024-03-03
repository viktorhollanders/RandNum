const btn = document.querySelector('.generate_btn');

function generateRandomNumber(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}

function updateResult() {
  let input = document.querySelector('#number_input').value;
  let rand_num = generateRandomNumber(0, input);

  let result = document.querySelector('#result');
  result.innerHTML = rand_num;
}

btn.addEventListener('click', updateResult);
