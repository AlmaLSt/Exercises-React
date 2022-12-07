import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/Todo.css';
import Checkmark from './Checkmark';
import Context from './Context';

  function Todo(props) {
    const { handleDeleteTodo } = React.useContext(Context);

    return (
      <div 
        data-testid='todo'
        className={`list-item ${props.done ? 'done' : ''}`}
        >
        <Link to={`/details/${props.index}`}>
          {props.text}
        </Link>
        <div className="is-pulled-right">
          <Checkmark
            done={props.done}
            index={props.index}
          />
          <button
            data-testid="delete-button"
            className="delete is-pulled-right"
            onClick={() => handleDeleteTodo(props.index)}
          />
        </div>
      </div>
    )
  }

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

Todo.defaultProps = {
  done: false,
};

export default Todo;
