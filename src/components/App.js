import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = React.useState([]);

  const changeDoneOnTodo = n => {
    const newTodos = [...todos];

    newTodos[n].done = !newTodos[n].done;
    setTodos(newTodos);
  }

  const updateTodos = todo => {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header todos={todos} />
        <TodoList todos={todos} onClickCheckmark={changeDoneOnTodo}/>
        <Form updateTodos={updateTodos}/>
      </div>
    </div>
  );
}

export default App;
