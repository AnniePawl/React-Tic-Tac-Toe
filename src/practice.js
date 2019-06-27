class Food {
  constructor(color, tastiness) {
    this.color = color;
    this.tastiness = tastiness;
  }
}
class Veggies {
  constructor(color, tastiness) {
    this.color = color;
    this.tastiness = tastiness;
  }
}

class Fruit {
  constructor(color, tastiness) {
    this.color = color;
    this.tastiness = tastiness;
  }
}

class Banana extends Fruit {
  constructor(size);
  super('yellow', 5);
  this.size = size
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
