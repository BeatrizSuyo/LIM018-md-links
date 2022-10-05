const mdLinks = require('../');
const { pathExists } = require('../index.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});

describe('pathExists', () => {
it('deberia ser una funcion', () => {
  expect(typeof pathExists).toBe('function');
});
it('deberia retornar la ruta que existe', ()=> {
  const route = './samples/sample.md';
  const routeValidate = pathExists(route);
  expect(routeValidate).toBe(route);
});
});
  describe('pathAbsolute', () => {
    it('deberia ser una funcion', () => {
      expect(typeof pathAbsolute).toBe('function');
    })
    it('deberia retornar la ruta si es absoluta', () => {
      const route = 'C:\\Users\\USUARIO\\Laboratoria\\Lim018-md-links\\README.md';
      // eslint-disable-next-line no-undef
      const routeValida = pathAbsolute(route);
      expect(routeValida).toBe(route);
    });
    it('deberia retornar mensaje si la ruta no es absoluta', () => {
      const routeInvalidate = './gym/practica.md';
      // eslint-disable-next-line no-undef
      const routeValidate = pathAbsolute(routeInvalidate);
      expect(routeValidate).toBe('la ruta es relativa');
    });
  });