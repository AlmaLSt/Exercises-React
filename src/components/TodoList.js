import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {
        props.todos.map((element, i) =>
          <Todo
            key={i}
            text={element.text}
            done={element.done}
            index={i}
          />)
      }
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList;
