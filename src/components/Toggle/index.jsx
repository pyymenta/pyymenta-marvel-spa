import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Toggle = ({ isActive, handleToggle }) => {
  const [active, setActive] = useState(isActive);

  const handleChangeEvent = () => {
    setActive(!active);

    handleToggle(!active);
  };

  return (
    <label htmlFor='toggle' className='toggle-wrapper'>
      <input
        onChange={handleChangeEvent}
        className='toggle'
        type='checkbox'
        name='toggle'
        id='toggle'
        checked={active}
      />
      <div />
    </label>
  );
};

Toggle.defaultProps = {
  isActive: false,
  handleToggle: () => {},
};

Toggle.propTypes = {
  isActive: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default Toggle;
