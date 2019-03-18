import Metronome from './Metronome';
import '../css/index.css';

const metronome = new Metronome(0);

document.body.innerHTML = '<h1>The Human Metronome Project</h1>';
const button = document.createElement('Button');
button.innerHTML = 'Start metronome';
button.onclick = function() {
  button.innerHTML = metronome.createTimeDiff() + '; ' + metronome.getCount();
};
// const text = document.createTextNode(metronome.createTimeDiff() + '; ' + metronome.getCount());

document.body.appendChild(button);

// window.robot = robot;
