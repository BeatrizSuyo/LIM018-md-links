
const comidas = ['Desayunar', 'Almorzar', 'Comer', 'Merendar', 'Cenar'];
// comidas.forEach(function(comida, index) {
//     console.log(`${index} : ${comida}`);
// });
// 0 : Desayunar
// 1 : Almorzar
// 2 : Comer
// 3 : Merendar
// 4 : Cenar
comidas.forEach(function(comida) {
    //console.log(`comida: ${comida}`);//recomensable
    //console.log('comidas',comidas);
});
const str = 'holamundo lindo';
let change = str.slice(2,4);//la---corta y nos devuelve el string desde 2 hasta 3,antes de 4
// change = str.slice(4,9);//mundo
// change = str.includes('hola');//true false
// change = str.split(' ');//devuelve un arreglo,en cada ' 'corta y es un elnt del array
// change = str.replace('hola','####')//reemplaza
// change = str.includes('mundo');//true or false
// change = str.length
//console.log('str => ',str);
console.log('change => ',change);
 const nombre = 'beatriz suyo';
 //declaro funcion nombre y guardo el string
 //busco metodo de cambiar a mayuscula
 //reeplazo minuscula por mayuscula
 let mayuscula = nombre.toUpperCase();
 //console.log('mayuscula',mayuscula);
 //SOLO CAMBIAR EL APELLIDO A MAYUSCULA
 //cortar el apellido y guardarlo en variable
 //este nuevo string aplicar to UpperCase ,a mayuscula
 //reemplazar minus por mayus,
 let apellido = nombre.slice(8,12);//suyo
 console.log(apellido);
 let apellido2 = apellido.toUpperCase();//SUYO
 console.log(apellido2);
 let nombreCompleto = nombre.replace('suyo','SUYO');//beatriz SUYO
 console.log(nombreCompleto);
 //tambien reeplazo directo
 let nombreCompleto2= nombre.replace('beatriz','BEATRIZ');//BEATRIZ suyo
 console.log(nombreCompleto2);
 //CONVERTIR EL NOMBRE Y APELLIDO A MAYUS
 nombreCompleto2= nombre.replace('beatriz suyo','BEATRIZ SUYO');
 console.log('nombreCompleto2',nombreCompleto2);