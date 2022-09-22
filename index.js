const fs = require('fs');
const path = require('node:path');
const routeInvaliteFile = './samples/sample3.js'
const routeValidate = './samples/sample.md';
const routeValidateLong = './README.md';
const routeEmpty = './samples/sample2.md';
const textFile = './samples/sample4.txt';
// console.log(path);

function pathExists(parametro) {
  const pathExists = fs.existsSync(parametro);
  return pathExists;
}

function pathAbsolute(parametro) {
  const isAbsolute = path.isAbsolute(parametro);
  return isAbsolute;
}
  
function convertRelativeToAbsolute(parametro) {
 // console.log(' ruta es  convetida  a absoluta..', path.resolve(parametro));
  return path.resolve(parametro);
}

//extension .md
function mdExtension(filePath){
  const extension =path.extname(filePath);
  return extension === '.md';  
  }
  

//leyendo archivo
function readFile(parametro) {
  try {
    const file = fs.readFileSync(parametro, 'utf-8');//throw err
    return file
  }
  catch (error) {
    return '';
  }
}

//extraer links
function findLinks(readFileAbsolutePath){
  const textHttps = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  const arrayTextHttps = readFileAbsolutePath.match(textHttps);
  console.log(arrayTextHttps);
  if(arrayTextHttps === null){
    return [];
    // eslint-disable-next-line no-unreachable
    const arrayObjetosLimks = arrayTextHttps.map((links) => {




      // const textLink = /\[[^\s]+(.+?)\]/gi
      // const matchText = links.match(textLink);

      // const httpsLink = /\((https?.+?)\)/gi;
      // const matchHttp = fs.link.match(httpsLink);
      // const objLinks = {
      //   href: matchHttp[0].slice(1, -1),
      //   text: matchText[0].slice(1, -1),
      //   file: pathAbsolute,
      // };
      // return objLinks;
    });
    // eslint-disable-next-line no-unreachable
    return arrayObjetosLimks;
  }
}


console.log('ruta existe ', pathExists(routeInvaliteFile));
console.log('es ruta absoluta ', pathAbsolute(routeValidate));
console.log('la ruta convertida a absoluta...', convertRelativeToAbsolute(routeValidate));
console.log('es ruta .md ', mdExtension(routeInvaliteFile));
console.log('leyendo links ', readFile(routeValidate));
console.log('encontrando links', findLinks(readFile(routeValidate)));


module.exports={ pathExists,
  pathAbsolute,
  convertRelativeToAbsolute,
  mdExtension,
  readFile
 }



 