// imported
const Input = require('../index.js');

// A testing suite
describe('Input', () => {
  // A test is created 
  describe('Characters', () => {
    it('should test that there is not more than 3 characters', () => {
      const input = "SVG";
      expect(input.length).toBeLessThanOrEqual(3);
    });
  });
// A test is created 
  describe('Color', () => {
    it('should test that color is defined', () => {
      const input = "purple";
      expect(input).toBeDefined();
    });
  });
  // A test is created 
  describe('Shape', () => {
    it('should test that a shape is picked', () => {
      const input = "circle";
      expect(input).toBe('circle' | 'square' | 'triangle');
    });
  });
});

