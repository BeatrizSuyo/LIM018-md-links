const fs = require('fs');
const path = require('node:path');
// eslint-disable-next-line no-unused-vars
const routeInvalidate = './samples/sample3.js'
// eslint-disable-next-line no-unused-vars
const routeValidate = './samples/sample.md';
const routeValidateLong = './samples/myReadme.md';
const routeEmpty = './samples/sample2.md';
const textFile = './samples/sample4.html';
const axios  =require('axios');

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
  //convertir path relativab a absoluta
function convertRelativeToAbsolute(route) {
 // console.log(' ruta es  convetida  a absoluta..', path.resolve(parametro));
  return path.resolve(route);
}
//verificar extension .md
function mdExtension(filePath){
  const extension =path.extname(filePath);
  if (extension === '.md'){
    return extension;
  }
  return 'no es archivo .md';
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
    // return 'error:no se encontró archivo';
  }
}

//extraer links
function findLinks(route){
  //console.log('parametro de findLinks',parametro);//muestra la ruta
  const contenido = readFile(route);
  //console.log('content de findLinks',content);//muestra links
  //return content;
  const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  const arrayLinks = contenido.match(regExp);
  return arrayLinks;
}
   //console.log('almacena los links y textos en un arreglo',findLinks(routeValidateLong));
function getArrayObj(arrayLinks, route) {
  const arrayObjetos = [];
  if (arrayLinks.length > 0) {
    for (let i = 0; i < arrayLinks.length; i++) {
      const indexCut = arrayLinks[i].indexOf(']');
      const textLink = arrayLinks[i].slice(1, indexCut);
      const urlLink = arrayLinks[i].slice(indexCut + 2, -1);
      const objetoLink = {
        text: textLink,
        href: urlLink,
        file: route
      };
      arrayObjetos.push(objetoLink);
      //console.log('muestra array de objetos',arrayObjetos);//devuelve array de objetos,iterando  
    }
    return arrayObjetos;
  }
  return 'el array esta vacio';
}
   // console.log(getArrayObj(findLinks(routeValidateLong),routeValidateLong));//devuelve arary de objetos
   
    //peticion http
//console.log(axios.get('https://developer.mozilla.org'));//promesa pendiente
// axios.get('https://developer.mozilla.org')
// .then((resolve)=>{
//   console.log('status:',resolve.status);
//   console.log('statusText:',resolve.statusText);
// })


   console.log('ruta existe ', pathExists(routeEmpty));
  console.log( pathAbsolute(routeValidateLong));
   console.log('la ruta convertida a absoluta...', convertRelativeToAbsolute(routeValidate));
   console.log('tiene extension',mdExtension(routeValidate));
   console.log(readFile(routeValidate));
   console.log('Encontrando links:', findLinks(routeValidateLong));//muestra array de string
   console.log('Muestra arreglo de links(objetos):', getArrayObj(findLinks(routeValidate),routeValidate));//muestra array de objetos

  module.exports = {
    pathExists,
    pathAbsolute,
    convertRelativeToAbsolute,
    mdExtension,
    readFile,
    findLinks
  }
