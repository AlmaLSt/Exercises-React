import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import Context from './Context';
import TodoDetails from './TodoDetails';
import NotFound from './NotFound';

import { get, update, create, del } from '../todos';


function App() {
  const [todos, setTodos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const getTodos = async () => {
    const response = await get();
    setTodos([...response]);
  };

  const updateTodo = async (id, body) => {
    const response = await update(id, body);

    if (!response) {
      setError('Es nuestro error, perdón, pero los gatos los rompieron los cables. :-(, estamos trabajando para mejorar. Por favor intente más tarde.')

      setTimeout(() => {
        setError(null);
      }, 2000);

      return;
    }

    const newTodos = [...todos];
    const index = newTodos.findIndex(element => element.id === response.id);

    if (index === -1) {
        return;
    }

    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const createTodo = async todo => {
    const response = await create(todo);

    if (!response) return;

    setTodos([...todos, response]);
  }

  const deleteTodo = async id => {
    const ok = await del(id);

    if (!ok) return;

    const index = todos.findIndex(element => element.id === id);
      setTodos(
        [
        ...todos.slice(0, index),
        ...todos.slice(index + 1)
        ]
    );
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
        <Context.Provider value={{
          handleToggleDone: updateTodo,
          handleDeleteTodo: deleteTodo,
        }}>
          <Routes>
            <Route path="/" element={
              <>
                <Header todos={todos} />
                <TodoList todos={todos} />
                <Form createTodo={createTodo} />
                {error}
              </>
            } />
            <Route path="/details/:id" element={<TodoDetails todos={todos} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Context.Provider>
      </Grid>
    </Grid>
  );
}


export default App;
