import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';

const SetupForm = forwardRef(({onStart}, ref) => {
  const [name, setName] = useState('');
  const onNameChange = (event) => setName(event.target.value);
  
  const submit = () => {
    setName('');
    onStart({name: name});
  };
  
  const nameInput = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      nameInput.current.focus();
    }
  }));
  
  return (
      <div className='setup-form'>
        <input ref={nameInput} name="name" placeholder="Enter your name" value={name} onChange={onNameChange}/>
        <button type='submit' onClick={submit}>
          START
        </button>
      </div>
  );
});

SetupForm.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default SetupForm;
