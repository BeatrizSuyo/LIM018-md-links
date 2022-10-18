const fs = require('fs');
const path = require('node:path');
const axios  =require('axios');
// eslint-disable-next-line no-unused-vars
const routeInvalidate = './samples/sample3.js'
// eslint-disable-next-line no-unused-vars
const routeValidate = './samples/sample.md';
const routeValidateLong = './samples/myReadme.md';
const routeEmpty = './samples/sample2.md';
const textFile = './samples/sample4.html';
const directory = './directory';

//existencia de path
function pathExists(parametro) {
  const pathExists = fs.existsSync(parametro);
  // console.log('muestra el path',path);
  return pathExists;
}
//verificar si es path absoluta
function pathAbsolute(route) {
  const isAbsolute = path.isAbsolute(route);
  if(isAbsolute){
  return route;
}
return 'es relativa';
 }
  //convertir path relativa a absoluta
function convertRelativeToAbsolute(route) {
 // console.log(' ruta es  convetida  a absoluta..', path.resolve(parametro));
  return path.resolve(route);
}
//verificar extension .md
function mdExtension(filePath){
  const extension =path.extname(filePath);
  if (extension === '.md'){
    return true;
  }
   return false;
  }
  
//leyendo archivo(url)
function readFile(parametro) {
  //console.log('parametro a leer',parametro);
  try {//trata
    const file = fs.readFileSync(parametro, 'utf-8');//throw err
    return file;
  }
  catch (error){
    // console.log('No se encontró archivo',error);
    // throw new Error(error) 
     return 'error: no se encontró archivo';
  }
}
//verificar si  es directory *CONSUL
 const verifyPathIsDirectory = (route) => fs.statSync(route).isDirectory();
// console.log(verifyPathIsDirectory(directory));//true or false-adddown
 //leer contenido de directory
const readDirectory = (route) => fs.readdirSync(route, "utf-8");
//console.log(readDirectory(directory));//array de archivos


//extraer links
function findLinks(route){
  //console.log('route',route);
  //console.log('parametro de findLinks',parametro);//muestra la ruta
  const contenido = readFile(route);
  //console.log('contenido',contenido)//muestra links
  const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  const arrayLinks = contenido.match(regExp);
  //console.log("arrayLinks",arrayLinks)
  return arrayLinks;//[[]()]
}
//console.log('almacena los links y textos en un arreglo',findLinks(routeValidateLong));

//peticion
function getArrayObj(arrayLinks, route) {
  const arrayObjetos = [];
  if (arrayLinks.length > 0) {
    for (let i = 0; i < arrayLinks.length; i++) {
      const indexCut = arrayLinks[i].indexOf(']');//encuentra el 1er elemento q coincida
      const textLink = arrayLinks[i].slice(1, indexCut);
      const urlLink = arrayLinks[i].slice(indexCut + 2, -1);//desde-hasta fin sin incluir el fin
      const objetoLink = {
        href: urlLink,
        text: textLink,
        file: route
      };
      arrayObjetos.push(objetoLink);
      //console.log('muestra array de objetos',arrayObjetos);//devuelve array de objetos,iterando  
    }
    return arrayObjetos; //[{href,text,file}]
  }
  return 'el array esta vacio';
}
   //console.log(getArrayObj(findLinks(routeValidate),routeValidate));//devuelve arary de objetos
   

//const pruebas = ['https://github.com/markdown-it/markdown-it','https://github.com/Laboratoria/course-parser']


//======consumiendo promesas=====
function axiosPromises(arrayObjetos){
  const arrayPromises = [] ;
  for (let i = 0; i<arrayObjetos.length; i++){
    const obj = arrayObjetos[i];
    let promise = axios.get(obj.href)
    .then((response)=>{
     //console.log('muestra response',response);
      return {
        href: response.config.url,
        text: obj.text,
        file: obj.file,
        status: response.status,
        message: 'ok',
      };
    })
    .catch((error)=>{
     if ("response" in error) {
      return {
        href: error.response.url,
        text: obj.text,
        file: obj.file,
        status: error.response.status,
        message: 'fail',
      };
    }
  });
  arrayPromises.push(promise);
    }
    //console.log(arrayPromises);
    return Promise.all(arrayPromises);
 }
  axiosPromises((getArrayObj(findLinks(routeValidateLong),routeValidateLong)))
  .then((resolve)=>{
    //console.log('promesas resueltas',resolve)
  });
 
  /*  for...in  */
 //  bucle for...in itera sobre todas las propiedades enumerables  del objeto y registra una cadena de los nombres de propiedad y sus valores.
// **********
//ARRAY TEST,prueba de stats
const arrayTest =  [
  {        
    href: "https://github/workshopper/learnyounode",
    text: "learnyounode",
    file: "C:/User/USUARIO/Laboratoria/LIM018-md-links/README.md",
    status: "Failed request",
    message: "FAIL",
  },
  {       
    href: " https://docs.npmjs.com/about-npm",
    text: "About-npm",
    file: "C:/User/USUARIO/Laboratoria/LIM018-md-links/README.md",
    status: 200,
    message: "OK",
  } 
];


// Total Stats
const totalStats = (arrayObjects) => {
  const totalLinks = arrayObjects.length;
  return totalLinks;
};
// console.log('total Stats',totalStats(arrayTest));

// Unique Stats
const uniqueStats = (arrayObjects) => {
  const uniqueLinks = [...new Set(arrayObjects.map((link) => {
    return link.href;
  }))];
  return uniqueLinks.length;
};
//console.log('unique Stats',uniqueStats(arrayTest));

// Broken Stats
const brokenStats = (arrayObjects) => {
   console.log('links rotos', arrayObjects);
  const arrayBrokenLinks = arrayObjects.filter(link => link.message ==='FAIL');
  return arrayBrokenLinks.length;
};
 //console.log('broken Stats',brokenStats(arrayTest));

//**********************************************************************/
   //console.log('ruta existe ', pathExists(routeEmpty));
   //console.log( pathAbsolute(routeValidateLong));
   //console.log('la ruta convertida a absoluta...', convertRelativeToAbsolute(routeValidate));
   //console.log('tiene extension',mdExtension(routeValidate));
   //console.log(readFile(routeValidate));
   //console.log('Encontrando links:', findLinks(routeValidateLong));//muestra array de string
   //console.log('Muestra arreglo de links(objetos):', getArrayObj(findLinks(routeValidate),routeValidate));//muestra array de objetos
   //console.log('href de cada elemento',validateLinkStatus(getArrayObj(findLinks(routeValidate),routeValidate)));
   //console.log('objetos con promesas pendientes',axiosFunction((getArrayObj(findLinks(routeValidate),routeValidate))));

  module.exports = {
    pathExists,
    pathAbsolute,
    convertRelativeToAbsolute,
    mdExtension,
    readFile,
    findLinks,
    getArrayObj,
    axiosPromises,
    totalStats,
    uniqueStats,
    brokenStats,
    verifyPathIsDirectory,
    readDirectory
  }





//=======con for
// function axiosPromise(petition){
//   const promiseResult = [] ;
//   for (let i = 0; i<petition.length; i++){
//     //console.log(petition[i].promise)
//     petition[i].promise
//     .then((response)=>{
//       //console.log(response);
//       response.status,
//       response.statusText
//       //console.log(response.config.url);
//       //response.config.url
//       const obj = {
//         status: response.status,
//         statusText: response.statusText,
//         //url: response.config.url
//       }
//       //console.log(obj);
//       promiseResult.push(obj);
//       //return petition;    
//     })
//     .catch((error)=>{
//       error.response.status,
//       error.response.statusText
//       //error.response.config.url
//     })
//   }
//   console.log('promesa resuelta',promiseResult);
//   return Promise.all(promiseResult);
// }
// //console.log(Promise.all(axiosPromise(axiosFunction((getArrayObj(findLinks(routeValidate),routeValidate))))));
// axiosPromise(axiosFunction((getArrayObj(findLinks(routeValidate),routeValidate))))
// .then((response)=>{

//   console.log('esta es la promesa resuelta',response[0])
// })


//============con map===========
// function axiosPromise(petition){
//  return Promise.all(
//   petition.map((link)=>{
//    return link.promise
//     .then((response)=>{
//       //console.log(response);
//       //response.status,
//       //response.statusText
//       link.status= response.status;
//       link.statusText= response.statusText;
//       link.promise ='se resolvio la promesa';
//       //console.log(link);
//         return link;    
//     })
//     .catch((error)=>{
//       //error.response.status;
//       //error.response.statusText
//       link.status= 404;
//       link.statusText= 'fail';
//       link.promise ='no se resolvio la promesa';
//         return link;    
//     })
//   })
//  ) 
// }
// //console.log(Promise.all(axiosPromise(axiosFunction((getArrayObj(findLinks(routeValidate),routeValidate))))));
// axiosPromise(axiosFunction((getArrayObj(findLinks(routeValidate),routeValidate))))
// .then((response)=>{
//   console.log('esta es la promesa resuelta',response);}
//====
//obteniendo arreglo promesas pendientes
// function axiosFunction(petition) {
//   const promisePendiente = [];
//   for (let i = 0; i < petition.length; i++) {
//     const petitionAxios = axios.get(petition[i].href)
//     //console.log(typeof petitionAxios);
//     promisePendiente.push(petitionAxios)
//     petition[i].promise=petitionAxios;
//   }
//   return petition; //[{href,text,file,promise pendiente}]
// }
//console.log('objetos con promesas pendientes',axiosFunction((getArrayObj(findLinks(routeValidate),routeValidate))));
