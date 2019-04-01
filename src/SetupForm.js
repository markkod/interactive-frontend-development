import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SetupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.onStart = this.onStart.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  onStart() {
    this.props.onStart({name: this.state.name});
  }

  render() {
    return (
      <div className="setupForm">
        <input type='text' value={this.state.name} onChange={this.handleNameChange} placeholder="Your name"/>
        <button onClick={this.onStart}>START</button>
      </div>
    );
  }
}

SetupForm.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default SetupForm;
