// imported
const Input = require('../index.js');

// A testing suite
describe('Input', () => {
  // A test is created 
  describe('Characters', () => {
    it('should test that there is not more than 3 characters', () => {
      const input = new Input();
      expect(input.characters.length).toBeLessThanOrEqual(3);
    });
  });
});
