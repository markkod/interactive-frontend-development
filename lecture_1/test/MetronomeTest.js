import Metronome from '../src/Metronome';


describe('getCount', () => {
  it('should increase the count of the metronome', () => {
    const metronome = new Metronome();
    expect(metronome.getCount()).to.eql({
      counter: 1
    });
  });
});

describe('getTimeDiff', () => {
  it('should display the milliseconds', () => {
    const metronome = new Metronome();

  })
})
