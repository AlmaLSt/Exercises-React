import React from 'react';
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';

import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import Context from './Context';
import { URL } from '../constants';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = () => {
    axios.get(URL).then(response => setTodos([...response.data]))
  }

  const updateTodo = (id, body) => {
    axios.patch(`${URL}/${id}`, body)
    .then(response => {
      const newTodos = [...todos];
      const index = newTodos.findIndex(element => element.id === response.data.id);
  
      if (index === -1) {
          return;
      }
  
      newTodos[index].done = !newTodos[index].done;
      setTodos(newTodos);
    }).catch(error => {
      if (error.code === "ERR_NETWORK") {
        setError('Es nuestro error, perdón, pero los gatos los rompieron los cables. :-(, estamos trabajando para mejorar. Por favor intente más tarde.')
      }

      setTimeout(() => {
        setError(null);
      }, 2000);
    })
  };

  const updateTodos = todo => {
    axios.post(URL, todo).then(response => {
      setTodos([...todos, response.data]);
    })
  }

  const deleteTodo = id => {
    axios.delete(`${URL}/${id}`).then(() => {
      const index = todos.findIndex(element => element.id === id);
      setTodos(
        [
        ...todos.slice(0, index),
        ...todos.slice(index + 1)
        ]
    );
    })
  }

  return (
    <div className="wrapper">
      <div className="card frame">
        <Context.Provider value={{
          onClickCheckmark: updateTodo,
          onClickCross: deleteTodo,
        }}>
          <Routes>
            <Route path="/" element={
              <>
                <Header todos={todos} />
                <TodoList todos={todos} />
                <Form updateTodos={updateTodos} />
                {error}
              </>
            } />
            <Route path="/details/:id" element={<TodoDetails todos={todos} />} />
          </Routes>
        </Context.Provider>
      </div>
    </div>
  );
}

const TodoDetails = ({todos}) => {
  let { id } = useParams();

  id = parseInt(id, 10);

  const index = todos.findIndex(element => element.id === id);

  return (
    <div>
      Detalles de la tarea {todos[index] && todos[index].text}
      <ol>
        {
          todos[index] && todos[index].details && todos[index].details.map((e, i) => <li key={i}>{e}</li>)
        }
      </ol>
    </div>
  )
}

export default App;
