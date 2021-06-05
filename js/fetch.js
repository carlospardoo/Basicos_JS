//Extension json viewer de chrome
/*
Pagina para json de pruebas
https://jsonplaceholder.typicode.com/
*/

/*
XMLHttpRequest() es con AJAX
<xml></xml> Arquitectura SOAP
*/

/*
Arquitectura REST Trabaja con JSON
Trabaja con fetch
 */

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response =>response.json())
  .then(data =>{
      console.log(data);
  });
