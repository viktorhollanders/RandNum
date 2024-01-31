const btn = document.querySelector('.generate_btn');
let input = document.querySelector('#number_input').value;

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function updateResult() {
  let rand_num = generateRandomNumber(input);

  let result = document.querySelector('#result');
  result.innerHTML = rand_num;
}

btn.addEventListener('click', updateResult);
