import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//import { Link } from 'react-router-dom';

import Context from './Context';

  function Todo(props) {
    const { handleToggleDone, handleDeleteTodo } = React.useContext(Context);

    return (
      <ListItem
        data-testid='todo'
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => handleDeleteTodo(props.index)}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
        >
        <ListItemButton onClick={() => handleToggleDone(props.index, {done: !props.done})}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={props.done}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText>
            {props.text}
          </ListItemText>
        </ListItemButton>
      </ListItem>
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
