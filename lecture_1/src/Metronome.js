class Metronome {
  state = {
    counter: 0
  };

  createTimeDiff() {
    const d = new Date();
    return d.getMilliseconds();
  }

  getCount() {
    this.state.counter += 1;
    return this.state.counter;
  }
}

export default Metronome;
