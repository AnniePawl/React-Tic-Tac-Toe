class Veggies {
  constructor(color, tastiness) {
    this.color = color;
    this.tastiness = tastiness;
  }
}

class Pepper extends Veggies {
  constructor(size) {
    super('red', 3);
    this.size = size;
  }
}

class HotPepper extends Pepper {
  constructor(heatLevel) {
    super(9);
    this.heatLevel = heatLevel;
  }
}
