const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const parrafo = document.querySelector('#parrafo');
const botonCalcular = document.querySelector('button');
const contenido = document.querySelector('.principal');
h1.innerHTML = 'TITULO AGREGADO EN JS';

botonCalcular.addEventListener('click', btnCalular);

const img = document.createElement('img');
img.setAttribute('src', 'https://media.istockphoto.com/id/1456124306/es/foto/luna-llena-aislada-sobre-fondo-negro.jpg?s=1024x1024&w=is&k=20&c=-x1qFRnzY5Mg01Q05rx8LRkIuDE_rmBCGY6HIsJ_LYM=')
function btnCalular(e){
    e.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    const resultado = parrafo.innerHTML = `Resultado: ${suma}`;
    contenido.appendChild(img);
}




