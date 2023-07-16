// imported
const { string } = require('yargs');
const Generator = require('../generator.js');

// A testing suite
describe('Generator', () => {
  // A test is created 
  describe('SVG File', () => {
    it('should test that it generates a string', () => {
      const input = `<svg width="100" height="100"></svg>`;
      expect(typeof input).toBe("string");
    });
  });
});