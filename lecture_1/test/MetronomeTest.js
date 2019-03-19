import Metronome from '../src/Metronome';
import {describe} from 'mocha';

// https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71
/* global expect */

describe('getCount', () => {
  it('should increase the count of the metronome', () => {
    const metronome = new Metronome();
    expect(metronome.getCount()).to.eql(1);
    expect(metronome.getCount()).to.eql(2);
  });
});

describe('getTimeDiff', () => {
  it('getTimeDiff should return a number?', () => {
    const metronome = new Metronome();
    expect(metronome.createTimeDiff()).to.be.a('number');
  });
});
