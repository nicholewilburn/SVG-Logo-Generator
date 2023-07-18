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

    const svgHeader = `<svg version="1.1" width="400" height="180" xmlns="http://www.w3.org/2000/svg">`;
    const svgMain = `<${this.shape} x="50" y="20" width="150" height="150" fill="${this.color}" />`;
    const svgText = `<text fill="#ffffff" font-size="60" x="125" y="120" font-family="Verdana" text-anchor="middle">${this.characters}</text>`;
    const svgEnd = `</svg>`;
  
    return `${svgHeader}
${svgMain}
${svgText}
${svgEnd}`
} 

else if ( this.shape == `circle` ) {
    this.radius = 80;

    const svgHeader = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    const svgMain = `<${this.shape} cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    const svgText = `<text fill="#ffffff" font-size="60" x="150" y="125" font-family="Verdana" text-anchor="middle">${this.characters}</text>`;
    const svgEnd = `</svg>`;

    return `${svgHeader}
${svgMain}
${svgText}
${svgEnd}`
} 

else if ( this.shape == `triangle` ) {
    this.radius = 0;
    this.shape = "polygon";

    const svgHeader = `<svg version="1.1" width="25" height="25" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">`;
    const svgMain = `<${this.shape} points="30,4,4,60,60,60" fill="${this.color}" />`;
    const svgText = `<text fill="#ffffff" font-size="15" x="30" y="45" font-family="Verdana" text-anchor="middle">${this.characters}</text>`;
    const svgEnd = `</svg>`;

    return `${svgHeader}
${svgMain}
${svgText}
${svgEnd}`;
}


}
}

module.exports = SvgFile;