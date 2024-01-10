class Shape {
  setShapeColour(shapeColour) {
    this.shapeColour = shapeColour;
  }

  setText(text) {
    this.text = text;
  }

  setTextColour(textColour) {
    this.textColour = textColour;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="153,18 244,180 56,180" fill="${this.shapeColour}" /> <text x="50%" y="50%" font-size="40" fill="${this.textColour}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColour}" /> <text x="50%" y="50%" font-size="40" fill="${this.textColour}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColour}" /> <text x="50%" y="50%" font-size="40" fill="${this.textColour}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>`;
  }
}

module.exports = { Triangle, Circle, Square };