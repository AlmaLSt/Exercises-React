import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import List from '@mui/material/List';

function TodoList(props) {
  return (
    <nav data-testid="todo-list" >
      <List>
      {
        props.todos.map((element) =>
          <Todo
            key={element.id}
            text={element.text}
            done={element.done}
            index={element.id}
            details={element.details}
          />)
      }
      </List>
    </nav>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
