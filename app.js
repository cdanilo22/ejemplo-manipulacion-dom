let palabras = 'Ligar es ser agil';
let unir = palabras.split(' ').join(" ");
let revertir = unir.split('').reverse().join('');

console.log(unir);
let comprobar = unir.toLowerCase() == revertir.toLocaleLowerCase() ? 'Si es palindromo' : 'No es palindromo'

console.log(comprobar);


