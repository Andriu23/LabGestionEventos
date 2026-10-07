window.addEventListener("load", () => {

    const cambiarEstilo = document.getElementById('botonEstilo');

    cambiarEstilo.addEventListener('click', () => {
        const parrafo = document.getElementById('parrafo');
        parrafo.style.fontFamily = 'Courier New';
        parrafo.style.fontSize = '20px';
        parrafo.style.color = 'blueviolet';
    })

    const imprimirConsola = document.getElementById('form1');

    imprimirConsola.addEventListener('submit', (event) => {
        event.preventDefault();

        const fname = imprimirConsola.elements['fname'].value;
        const lname = imprimirConsola.elements['lname'].value;

        console.log(fname);
        console.log(lname);
    });

    const botonEnlaces = document.getElementById('botonEnlaces');

    botonEnlaces.addEventListener('click', () => {
        const enlaces = document.querySelectorAll('a');

        const total = enlaces.length;
        const primero = enlaces[0];
        const ultimo = enlaces[enlaces.length - 1];

        alert(
            `- Total de enlaces: ${total}\n` +
            `- Primer enlace: ${primero.href}\n` +
            `- Último enlace: ${ultimo.href}`
        );
    });

    const contenedor = document.getElementById('contenedor');
    const segundo = document.querySelectorAll('.segundo');
    const tercero = document.querySelectorAll('ol .tercero');

    contenedor.querySelector('p').textContent = '¡Hola!';

    const footer = document.querySelector('.footer');
    footer.classList.add('principal');
    footer.classList.remove('principal');

    const item = document.createElement('li');
    item.textContent = 'cuatro';

    contenedor.querySelector('ul').append(item);
});