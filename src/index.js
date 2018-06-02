// Guardo en variables todos los nodos de mi documento que necesito para hacer manipulación del DOM
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const btnEncodeWithOffset = document.getElementById('btn-encodeWithOffset');
const btnDecodeWithOffset = document.getElementById('btn-decodeWithOffset');
const inputMessage = document.getElementById('message');
const inputNumber = document.getElementById('number');
const inputMessageWithOffset = document.getElementById('messageWithOffset');
const result = document.getElementById('result-paragraph');

// Evento click para el botón Encode
btnEncode.addEventListener('click', (event) => {
  // preventDefault() para detener una acción por defecto, en este caso la del botón dentro de un form
  event.preventDefault();
  /* 
  Se pasa por parámetro el string y offset que el usuario ingresó, además escribe el resultado del método encode en el nodo html indicado
  */
  result.innerHTML = cipher.encode(inputMessage.value, inputNumber.value);
});

// Evento click para el botón Decode
btnDecode.addEventListener('click', (event) => {
  // preventDefault() para detener una acción por defecto, en este caso la del botón dentro de un form
  event.preventDefault();
  /* 
  Se pasa por parámetro el string y offset que el usuario ingresó, además escribe el resultado del método decode en el nodo html indicado
  */
  result.innerHTML = cipher.decode(inputMessage.value, inputNumber.value);
});

// Evento click para el botón Encode with offset 3
btnEncodeWithOffset.addEventListener('click', (event) => {
  // preventDefault() para detener una acción por defecto, en este caso la del botón dentro de un form
  event.preventDefault();
  /* 
  Se pasa por parámetro el string que el usuario ingresó y un offset arbitrariamente, además escribe el resultado del método decode en el nodo html indicado
  */
  result.innerHTML = cipher.createCipherWithOffset(3).encode(inputMessageWithOffset.value);
});

// Evento click para el botón Decode with offset 3
btnDecodeWithOffset.addEventListener('click', (event) => {
  // preventDefault() para detener una acción por defecto, en este caso la del botón dentro de un form
  event.preventDefault();
  /* 
  Se pasa por parámetro el string que el usuario ingresó y un offset arbitrariamente, además escribe el resultado del método decode en el nodo html indicado
  */
  result.innerHTML = cipher.createCipherWithOffset(3).decode(inputMessageWithOffset.value);
});