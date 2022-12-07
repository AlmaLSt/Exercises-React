import React from 'react';
import PropTypes from 'prop-types';

import '../css/Checkmark.css';
import Context from './Context';

// original: http://jsfiddle.net/awayF/490/
function Checkmark(props) {
  const { handleToggleDone } = React.useContext(Context);

  return (
    <span
      data-testid="checkmark"
      className={`checkmark ${props.done ? 'dimmed': ''}`}
      onClick={
        () => handleToggleDone(props.index, {done: !props.done})
      }
    >
      <div className="checkmark_stem"/>
      <div className="checkmark_kick"/>
    </span>
  )
};

Checkmark.propTypes = {
  done: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
}

Checkmark.defaultProps = {
  done: false,
}

export default Checkmark
