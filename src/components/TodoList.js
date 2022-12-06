import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList(props) {
  return (
    <div data-testid="todo-list" className="list-wrapper">
      {
        props.todos.map((element) =>
          <Todo
            key={element.id}
            text={element.text}
            done={element.done}
            index={element.id}
          />)
      }
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
