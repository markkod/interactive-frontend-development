class Metronome {
  counter = 0;

  createTimeDiff() {
    const d = new Date();
    return d.getMilliseconds();
  }

  getCount() {
    this.counter += 1;
    return this.counter;
  }
}

export default Metronome;
