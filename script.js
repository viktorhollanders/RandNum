const generate_btn = document.querySelector('.generate_btn');
const result = document.querySelector('resault');

generate_btn.addEventListener('click', random_num);

function random_num() {
  const input_value = document.getElementById('number_input').value;
  let num = Math.floor(Math.random() * input_value + 1);
  console.log(num);
}
