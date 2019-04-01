import React from 'react';
import MetronomeHitHistory from './MetronomeHitHistory';
import SetupForm from './SetupForm';
import '../css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onHit = this.onHit.bind(this);
    this.state = {
      hits: [],
      started: false
    };
  }

  onStart({name, frequency}) {
    this.setState({
      name: name,
      started: true,
      startMilliseconds: Date.now()
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
      hits: this.state.hits.concat([{miss: miss}])
    });
  }

  render() {
    if (!this.state.started) {
      return <SetupForm onStart={this.onStart}/>;
    } else {
      return (
        <div className="metronomeGame">
          <div>Hi {this.state.name}, try to click the button exactly every 1000 milliseconds</div>
          <button className="metronomeButton" onClick={this.onHit}>NOW</button>
          <MetronomeHitHistory hits={this.state.hits} frequency={1000} />
        </div>
      );
    }
  }
}

export default App;
