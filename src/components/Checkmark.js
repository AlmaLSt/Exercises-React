  import React from 'react';
import PropTypes from 'prop-types';
import '../css/Checkmark.css';
import Context from './Context';

// original: http://jsfiddle.net/awayF/490/
function Checkmark(props) {
  const { onClickCheckmark } = React.useContext(Context);

  return (
    <span
      className={`checkmark ${props.done ? 'dimmed': ''}`}
      onClick={
        () => onClickCheckmark(props.index)
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

export default Checkmark
