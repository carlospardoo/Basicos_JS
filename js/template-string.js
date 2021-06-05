/*Template Strings
Usan Backticks. Caracter: ``
${} Permite poner codigo js dentro
*/
const nombr = 'Carlos';
const edad = new Date().getFullYear() - 2000;

console.log('Bienvenido '+nombr+', tu edad es de '+edad);

console.log('Con comas: Bienvenido',nombr,', tu edad es de',edad);

console.log(`Bienvenido ${nombr}, tienes la edad de ${edad} ${new Date()}`.toUpperCase());
