/*
JSON
JS => JavaScript
O  => Object
N  => Notation
*/

const persona = {
    name:     "Carlos",
    lastname: "Pardo",
    color:    "blue",
    numberId: 3,
    setNumberId: numb => numberId = numb
};

document.write(persona.name);

/*Object Destructuring*/
document.write('<p>' + persona.name + '</p>');
document.write('<p>' + persona.lastname + '</p>');
document.write('<p>' + persona.color + '</p>');

//Si el objeto JSON es muy grande es mejor hacerlo asi:
//Los nombres deben coincidir
const {nombre, apellido, colour, ide} = {
    nombre:     "Carlos",
    apellido: "Pardo",
    colour:    "blue",
    ide: 3,
    setNumberId: numb => numberId = numb
};

document.write('Con Object Destructuring');

document.write('<p>' + nombre + '</p>');
document.write('<p>' + apellido + '</p>');
document.write('<p>' + colour + '</p>');


