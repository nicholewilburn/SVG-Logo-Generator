class SvgFile {
    // Instantiates a SVGfile and validates input.
    constructor(characters, color, shape) {

        this.characters = characters;
        this.color = color;
        this.shape = shape;
        let radius = 0;

      if (characters.length > 3) {
        throw new Error('Can only be 3 characters or less.');
      }
      if (!/[a-z][a-z0-9_]{2,}/i.test(characters)) {
        throw new Error(`Can only have letters, numbers, and underscore.`);
      }
  
      if ( shape == 'square' ) {
        shape = "rect";
        radius = 0;
    } else if ( shape == `circle` ) {
        radius = 40;
    } else if ( shape == `triangle` ) {
        radius = 0;
    }

    const svgHeader = `<svg width="100" height="100">`;

    const svgMain = `<${shape} cx="300" cy="300" r="${radius}" fill="${color}" />`;

    const svgText = `<text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">${characters}</text>`;

    const svgEnd = `</svg>`;

    return `${svgHeader}${svgMain}${svgText}${svgEnd}`;

}
}

module.exports = SvgFile;