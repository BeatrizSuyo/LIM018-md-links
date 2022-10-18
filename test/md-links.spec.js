const {mdLinks} = require('../index.js');
const { pathExists,
   pathAbsolute,
   convertRelativeToAbsolute,
   mdExtension,
   readFile,
   findLinks,
   totalStats,
   uniqueStats,
   brokenStats
  } = require('../functions.js');

  arrayTest =  [
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
      text: "Overview",
      file: "C:\\Users\\USUARIO\\Laboratoria\\Lim018-md-links\\samples\\sample.md"
    },
  ];
describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!');
  });
});

describe('pathExists', () => {
   it('deberia ser una funcion', () => {
    expect(typeof pathExists).toBe('function');
  });
  it('deberia retornar true si la ruta existe', () => {
    const route = './samples/sample.md';
    const routeValidate = pathExists(route);
    expect(routeValidate).toBeTruthy();
  });
  it('deberia retornar false si la ruta no existe', () => {
    const path = './example.md';
    const falsePath = pathExists(path);
    expect(falsePath).toBeFalsy();
  });
  it('deberia retornar false si la ruta ingresada es no es correcta', () => {
    const path = 'example.md';
    const pathString = pathExists(path);
    expect(pathString).toBe(false);
  });
});

describe('pathAbsolute', () => {
  // const route = './samples/sample.md';
  it('deberia ser una función', () => {
    expect(typeof pathAbsolute).toBe('function');
  })
  it('deberia retornar true si la ruta si es absoluta', () => {
    const route = 'C:\\Users\\USUARIO\\Laboratoria\\Lim018-md-links\\README.md';
    // eslint-disable-next-line no-undef
    const isAbsolute = pathAbsolute(route);
    expect(isAbsolute).toBeTruthy();
  });
  it('deberia retornar mensaje false si la ruta es relativa', () => {//no
    const route = '../samples/sample2.md';
    // eslint-disable-next-line no-undef
    const isRelativa = pathAbsolute(route);
    //expect(isRelativa).toBeFalsy();
    expect(pathAbsolute('route')).toBeFalsy();
  });
});

  describe('convertRelativeToAbsolute', () => {
    it('deberia de ser una función', () => {
      expect(typeof convertRelativeToAbsolute).toBe('function');
    });
    it('deberia convertir la ruta relativa a ruta absoluta', () => {
      const path = '../LIM018-md-links/samples/sample.md';
      const convertToAbsolute = convertRelativeToAbsolute(path);
      expect(convertToAbsolute).toBe('C:\\Users\\USUARIO\\Laboratoria\\LIM018-md-links\\samples\\sample.md');
    });
    
  });

  describe('mdExtension', () => {
    it('deberia de retornar true si la extension del archivo es .md', () => {
      const route = 'sample.md';
      const mdExten = mdExtension(route);
      expect(mdExten).toBeTruthy();
    });
    it('deberia de retornar false si la extensión de el archivo no es .md', () => {
      const route = 'sample4.html';
      const htmlExt =mdExtension(route);
      expect(htmlExt).toBeFalsy();
    });
    it('deberia de retornar un mensaje indicando que la ruta no es valida si la ruta no es un string', () => {
      const route = '123456';
      const htmlText = mdExtension(route);
      //expect(htmlText).toBe(`La ruta ingresada no es valida: ${route}`);
      expect(htmlText).toBeFalsy();
    });
  });
  describe('readFile', () => {
    it('deberia de retornar el contenido del archivo', () => {
      const stringContent = ` el _parseado_ (análisis) del markdown para extraer los
      links podría plantearse de las siguientes maneras (todas válidas):
      * Usando un _módulo_ como [markdown-it](https://github.com/markdown-it/markdown-it),
        que nos devuelve un arreglo de _tokens_ que podemos recorrer para identificar
        los links.
      * Siguiendo otro camino completamente, podríamos usar
        [expresiones regulares ] (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)`;
        const path = '../samples/sampleFile.md';
        const content = readFile(path);
        expect(content).toEqual('stringContent');
    });
    it('deberia de retornar mensaje de error si el archivo esta vacio', () => {
      const path = '../sample2.md';
      const content = readFile(path);
      expect(content).toBe('error: no se encontró archivo');
    });
    });
    describe('findLinks', () => {
      it('deberia de retornar un array con los links encontrados', () => {
        const content = `El comportamiento por defecto no debe validar si las URLs responden ok o no,
        solo debe identificar el archivo markdown (a partir de la ruta que recibe como
        argumento).
        [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
        [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)`;
        const path = 'C:\\Users\\USUARIO\\laboratoria\\LIM018-md-links\\samples\\sample2.md';
        const arrLinks = findLinks(path);
        const arrResult = ['[Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)', '[Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)'];
        expect(arrLinks).toBe(arrResult);
      });
    });
   
    describe('totalStats', () =>{
      it('deberia ser una función', () =>{
        expect(typeof totalStats).toBe('function');
      });
      it('debe mostrar el total de enlaces encontrados en el arreglo', () =>{
          expect(totalStats(arrayTest)).toEqual(1);
      });
    });

    describe("uniqueStats", () => {
      it('debe mostrar el total de enlaces únicos en el arreglo', () =>
        expect(uniqueStats(arrayTest)).toEqual(1));
    });
    
    describe("brokenStats", () => {
      it('debe mostrar el total de enlace rotos', () =>
        expect(brokenStats(arrayTest)).toStrictEqual(0));
    });