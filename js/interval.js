const saludo = () => {document.write('<li>Hola Mundo</li>')};

document.write('<ol>');

/*setInterval esta en ms

Si se pone funcion con parentesis, solo se ejecuta una vez
*/
//setInterval(saludo(),1000);
setInterval(saludo,2000);

document.write('</ol>');
