import React from 'react';
import PropTypes from 'prop-types';

import '../css/header.css';

function Header(props) {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        Hay {props.todos.length} tareas
      </h1>
    </div>
  )
};

Header.defaultProps = {
  todos: [],
}

Header.proptTypes = {
  todos: PropTypes.array.isRequired,
}

export default Header;
