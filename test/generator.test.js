// imported
const Generator = require('../generator.js');

// A testing suite
describe('Generator', () => {
  // A test is created 
  describe('first generation', () => {
    it('should test that it generates', () => {
      const input = new Input();
      expect(input).toEqual(0);
    });
  });
});