/*Promesas 
resolve si es exitoso
si no se puede completar el reject
then solo ejecuta si es validado
catch se ejecuta en caso de error
*/
const sumar = (a,b) =>{
    return new Promise((resolve, reject) => {
        if ( a<0 || b<0 ){
            reject("Esto no es valido");
        }
        else{
            resolve(a+b);
        }
    });
};

//const result = sumar("a",false);
//const result = sumar(-3,5);
document.write('<br>');
const result = sumar(3,5)
 .then((res) =>{document.write(res)})
 .catch((error) =>{document.write(error)});
console.log(result);
