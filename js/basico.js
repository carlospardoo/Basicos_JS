//Funcion flecha basica
const suma = (x,y) => x+y + (x*y);

//Condicional que valida con else
const condicional = valido => valido == true ? "Estoy validado" : "No estoy validado"; 

//Condicional que solo valida una opcion
const condUno = validado => validado == true && "Me valide bien";

document.write(suma(5,4));
document.write("<br>");
document.write(condicional(true));
document.write(" - ");
document.write(condicional(false));
document.write("<br>");
document.write(condUno(false));
document.write(" - ");
document.write(condUno(true));
document.write("<br>");


document.write("<br>Todo OK hasta aqui");
