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
})
it('deberia retornar la ruta que existe', ()=> {
  const route = './samples/sample.md';
  const routeValidate = pathExists(route);
  expect(routeValidate).toBe(route);
});


})
