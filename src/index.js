class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.guessValue = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessValue = Math.ceil((this.min + this.max) / 2);
    return this.guessValue;
  }

  lower() {
    this.max = this.guessValue;
  }

  greater() {
    this.min = this.guessValue;
  }
}

module.exports = GuessingGame;
