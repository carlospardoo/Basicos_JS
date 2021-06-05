document.write('Arrays <br>');
const numeros = [1, 2, 3, 4];
document.write(numeros);

document.write('<ul>');

for (num in numeros){
    document.write('<li>');
    document.write(num);
    document.write('</li>');
}

document.write('</ul>');

/*Funcion Map*/
document.write('<ul>');
const nuevo = numeros.map((numero, i)=>{document.write('<li>'+ numero +'</li>');});
document.write('</ul>');
document.write(numeros);
document.write(nuevo);

/*Array Destructuring */
const usuarios = ['Pepe','Juan','Lucia','Maria'];
document.write('<br>');
document.write(usuarios);

const [usuario1] = ['Pepe','Juan','Lucia','Maria'];
document.write('<br>');
document.write(usuario1);

const [ , , usuario3] = ['Pepe','Juan','Lucia','Maria'];
document.write('<br>');
document.write(usuario3);

let a = 5;
console.log('Ejemplo con ++');
console.log(++a);
console.log(a);
console.log(a++);
console.log(a);
//console.log(++a++);//Fallo
