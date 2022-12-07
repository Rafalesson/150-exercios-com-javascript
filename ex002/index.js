const btn = document.querySelector('.btn');

const printarTela = () => {
    window.print();
}

btn.addEventListener('click', printarTela);