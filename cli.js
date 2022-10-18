#!/usr/bin/env node
//console.log('hola');
const chalk = require("chalk");
 //console.log(chalk.magentaBright("Hello world!"));
const{ mdLinks }= require("./index.js");
const {totalStats,uniqueStats,brokenStats}=require("./functions.js");
// arg[0] node route
// arg[1] md-links route
// arg[2] file route
// arg[3] options --validate or --stats
const args = process.argv;
// console.log(`holi ${args}`);//['C:\\..'route]
console.log('args',args);//['C:\\..'route]
const filterdArgs = args.filter((x) => !["--stats", "--validate"].includes(x));//si no tiene sta y vali,q incluya [2]
console.log('filterdArgs=',filterdArgs);
const routeArg = filterdArgs[2];//si no tiene sta y vali,q incluya [2]
console.log('routeArg=',routeArg);
const isValidate = args.includes("--validate");
console.log('isValidate=',isValidate);
const isStats = args.includes("--stats");
console.log('isStats=',isStats);
const sampleFile ='C:\\Users\\USUARIO\\Laboratoria\\LIM018-md-links\\samples\\myReadme.md';
                 //C:/Users/USUARIO/Laboratoria/LIM018-md-links/samples/myReadme.md  

// mdLinks(routeArg, { stats: isStats, validate: isValidate })
//   .then((arrayLinks) => {
//     if (isValidate && isStats) {
//       console.log(`
//       STATS && VALIDATE
//       Total  Links : ${chalk.blueBright(totalStats(arrayLinks))};
//       Unique Links: ${chalk.blue(uniqueStats(arrayLinks))};
//       Broken Links: ${chalk.green(brokenStats(arrayLinks))};
//     `);
//     } else if (isStats && !isValidate) {
//       console.log(`
//       STATS 
//       Total Links   : ${chalk.blueBright(totalStats(arrayLinks))};
//       Unique Links  : ${chalk.blue(uniqueStats(arrayLinks))}  
//     `);
//     } else {
//       arrayLinks.forEach((link) => {
//         if (!isStats && !isValidate) {
//           console.log(`
//           LINKS FOUND   
//           href : ${chalk.yellow(link.href)};
//           text : ${chalk.magenta(link.text)};
//           file : ${chalk.blue(link.file)};`);
//         } else {
//           console.log(`
//          STATUS LINKS FOUND 
//           href: ${chalk.cyanBright(link.href)}
//           text: ${chalk.magentaBright(link.text)} 
//           file: ${chalk.blueBright(link.file)} 
//           message: ${
//        link.message === "OK"
//          ? chalk.green(link.message)
//          : chalk.yellow(link.message)
//          } 
//           status: ${chalk.grey(link.status)}`);
//         }
//       });
//     }
//   })
//   .catch((e) => console.log(chalk.red(" ● "), chalk.red.italic(e)));
