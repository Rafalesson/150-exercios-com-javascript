const log = console.log;
const resultado1 = document.querySelector('.diaSemana');
const resultado2 = document.querySelector('.horaAtual');

const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const data = new Date();

const diaHoje = diasSemana[data.getDay()];

const hora = data.getHours();
const minuto = data.getMinutes();
const segundo = data.getSeconds();

resultado1.innerHTML = `<p>Hoje é: <span class='laranja'>${diaHoje}.</span></p>`;
resultado2.innerHTML = `<p>A hora atual é: <span class='laranja'>${hora}:${minuto}:${segundo}.</span></p>`;

