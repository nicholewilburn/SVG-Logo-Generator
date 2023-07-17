class SvgFile {
    // Instantiates a SVGfile and validates input.
    constructor(characters, color, shape) {

        this.characters = characters;
        this.color = color;
        this.shape = shape;
        this.radius = 0;

}

render() {

  if (this.characters.length > 3) {
    throw new Error('Can only be 3 characters or less.');
  }
  if (!/[a-z][a-z0-9_]{2,}/i.test(this.characters)) {
    throw new Error(`Can only have letters, numbers, and underscore.`);
  }

  if ( this.shape == 'square' ) {
    this.shape = "rect";
    this.radius = 0;
} else if ( this.shape == `circle` ) {
    this.radius = 80;
} else if ( this.shape == `triangle` ) {
    this.radius = 0;
}

  const svgHeader = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  const svgMain = `<${this.shape} cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;

  const svgText = `<text fill="#ffffff" font-size="60" x="150" y="125" font-family="Verdana" text-anchor="middle" fill="white">${this.characters}</text>`;

  const svgEnd = `</svg>`;

  return `${svgHeader}
${svgMain}
${svgText}
${svgEnd}`;
}
}

module.exports = SvgFile;