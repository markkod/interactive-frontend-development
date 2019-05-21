import React from 'react';
import MetronomeHitHistory from './MetronomeHitHistory';
import SetupForm from './SetupForm';
import '../css/index.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onHit = this.onHit.bind(this);
    this.state = {
      hits: [],
      totalMiss: 0,
      started: false
    };
    this.setupForm = React.createRef();
  }

  onStart({name, frequency}) {
    this.setState({
      name: name,
      started: true,
      startMilliseconds: Date.now(),
      totalMiss: 0,
    });
  }

  onHit() {
    const millis = (new Date()).getMilliseconds();
    let miss;
    if (millis >= 500) {
      miss = 1000 - millis;
    } else {
      miss = millis;
    }
    this.setState({
      hits: this.state.hits.concat([{miss: miss}]),
      totalMiss: this.state.totalMiss + miss
    });
  }

  render() {
    if (!this.state.started) {
      return <SetupForm ref={this.setupForm} onStart={this.onStart}/>;
    } else {
      return (
        <div className="metronomeGame">
          <div>Hi {this.state.name}, lets play Human Metronome</div>
          <div>Your total miss thus far is {this.state.totalMiss} ms</div>
          <button className="metronomeButton" onClick={this.onHit}>NOW</button>
          <MetronomeHitHistory hits={this.state.hits} frequency={1000} />
        </div>
      );
    }
  }
}

App.propTypes = {
  focusForms: PropTypes.bool.isRequired
};

App.defaultProps = {
  focusForms: true
};


export default App;
