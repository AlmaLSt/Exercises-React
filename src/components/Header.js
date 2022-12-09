import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function Header(props) {
  return (
   <Typography
    variant="h5"
    component="h1"
   >
    Hay {props.todos.length} tareas
  </Typography>
  )
};

Header.defaultProps = {
  todos: [],
}

Header.proptTypes = {
  todos: PropTypes.array.isRequired,
}

export default Header;
