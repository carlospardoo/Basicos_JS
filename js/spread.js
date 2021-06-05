/*Spread operator para unir arreglos 
Hace copia de los dos arreglos
const nuevoSpread = [...frutas, ...citricos];
*/

const frutas = ['manzana','uva','melon'];
const citricos = ['naranja','limon','toronja'];

//const nuevoSpread = frutas + citricos;
const nuevoSpread = [...frutas, ...citricos];

document.write('<br>');
document.write(frutas);
document.write(citricos);

document.write('<br>');
document.write(nuevoSpread);
