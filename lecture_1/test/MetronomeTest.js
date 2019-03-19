import Metronome from '../src/Metronome';

// https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71

const expect = require('chai').expect; /* global require */

describe('getCount', () => {
  it('should increase the count of the metronome', () => {
    const metronome = new Metronome();
    expect(metronome.getCount()).to.eql({
      counter: 1
    });
  });
});

describe('getTimeDiff', () => {
  it('getTimeDiff should return a number?', () => {
    const metronome = new Metronome();
    expect(metronome.createTimeDiff()).to.be.a('number');
  });
});
