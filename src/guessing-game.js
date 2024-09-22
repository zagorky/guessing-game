class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.solution = Math.round((this.min + this.max) / 2));
  }
  lower() {
    return (this.max = this.solution);
  }
  greater() {
    return (this.min = this.solution);
  }
}

module.exports = GuessingGame;
