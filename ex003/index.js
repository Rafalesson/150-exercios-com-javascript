const btn = document.querySelector(".btn");

const mostraData = () => {
  const resultado = document.querySelector(".resultado");

  const data = new Date();

  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  resultado.innerHTML = `
  <p>Resultado: 
        <ul class='laranja'>
            <li>${dia} - ${mes} - ${ano}</li>
            <li>${dia} / ${mes} / ${ano}</li>
            <li>${mes} - ${dia} - ${ano}</li>
            <li>${mes} / ${dia} / ${ano}</li>
        </ul>
    </p>`;

    resultado.classList.remove('off');
    btn.classList.add('off');
};

btn.addEventListener("click", mostraData);
