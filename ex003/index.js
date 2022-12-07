const resultado = document.querySelector('.resultado');

const data = new Date();

const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();

resultado.innerHTML = `<p>Resultado: <span class='laranja'>${dia} / ${mes} / ${ano}</span></p>`;

