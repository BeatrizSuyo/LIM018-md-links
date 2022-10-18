const functions = require("./functions.js");
const routeValidate = './samples/sample.md';
const routeValidateLong = './samples/myReadme.md';//1link falla
const routeEmpty = './samples/sample2.md';
const routeInvalidate = './samples/sample3.js'
const routeHtml= './samples/sample4.md';
function mdLinks(route, options){
   //console.log(route);ruta que paso como parametro
     const promiseMdLinks = new Promise((resolve, reject)=>{
         if (!functions.pathExists(route)) {
             reject('la ruta ingresada no existe,ingrese ruta valida');
         }
         if (!functions.pathAbsolute(route)) {
             route = functions.convertRelativeToAbsolute(parametro)
         }
         if(!functions.mdExtension(route)){
            reject ('no es archivo .md');
         }
         const arrayLinks = functions.findLinks(route);
         const arrayObjetos = functions.getArrayObj(arrayLinks,route);
         const arrayPromises = functions.axiosPromises(arrayObjetos);
         if(options.validate===true){
            resolve(arrayPromises);//[{href,text,file,status,message}]
         }
         else {
            resolve (arrayObjetos);//[{href,text,file}],sin promesa
         }
     });
     return promiseMdLinks;
 }
 
 mdLinks(routeValidate,{validate:true})
 .then ((resolve)=>{
   // console.log(resolve);
 })
 .catch((error)=>{
   // console.log(error)
 })
 module.exports ={
    mdLinks   
 }
//dado n = 5
//  const arr = [1,2,3,4];
//  //n = 1+4;
//  //recorrer el array
//  function suma2(arr,n){
//    let newArr =[];
//    for(let i=0;i<arr.length; i++){
//       for(let j=i+1; j<arr.length;j++){
//          if(arr[i]+arr[j]==n){
//             newArr.push(arr[i]+arr[j]);
//             return [i,j];  
//          }
//       }
//    }
//    }
//  console.log(suma2([2,1,3,4,5],5));//[0,2]
const comidas = ['Desayunar', 'Almorzar', 'Comer', 'Merendar', 'Cenar'];
comidas.forEach(function(comida, index) {
   // console.log(`${index} : ${comida}`);
});
// 0 : Desayunar
// 1 : Almorzar
// 2 : Comer
// 3 : Merendar
// 4 : Cenar
//console.log()