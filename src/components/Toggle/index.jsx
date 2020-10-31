import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Toggle = ({ isActive }) => {
  const [active, setActive] = useState(isActive);

  return (
    <label htmlFor='toggle' className='toggle-wrapper'>
      <input
        onClick={() => setActive(!active)}
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
};

Toggle.propTypes = {
  isActive: PropTypes.bool,
};

export default Toggle;
