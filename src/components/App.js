import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import Context from './Context';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: []
//     }

//     // this.changeDoneOnTodo = this.changeDoneOnTodo.bind(this);
//     // this.updateTodos = this.updateTodos.bind(this);
//   }

//   changeDoneOnTodo = (n) => {
//     const newTodos = [...this.state.todos];
  
//     newTodos[n].done = !newTodos[n].done;
//     this.setState({ todos: newTodos });
//   }

//   updateTodos = (todo) => {
//     this.setState({todos: [todo, ...this.state.todos]});
//   }

//   render() {
//     const {
//       changeDoneOnTodo,
//       updateTodos,
//       state: {
//         todos,
//       }
//     } = this;

//     return (
//       <div className="wrapper">
//         <div className="card frame">
//           <Header todos={todos} />
//           <TodoList todos={todos} onClickCheckmark={changeDoneOnTodo}/>
//           <Form updateTodos={updateTodos}/>
//         </div>
//       </div>
//     );
//   }
// }

function App() {
  const [todos, setTodos] = React.useState([]);

  const changeDoneOnTodo = index => {
    const newTodos = [...todos];

    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  const updateTodos = todo => {
    setTodos([todo, ...todos]);
  }

  const deleteTodo = index => {
    // copiar los elementos del array todos
    // desde el inicio hasta index (sin el elemento index)
    // de index + 1, hasta el final.
    // const head = todos.slice(0, index);
    // const end = todos.slice(index + 1);
    // setTodos([...head, ...end]);

    setTodos(
      [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
      ]
    );
  }

  return (
    <div className="wrapper">
      <div className="card frame">
        <Context.Provider value={{
          onClickCheckmark: changeDoneOnTodo,
          onClickCross: deleteTodo,
        }}>
          <Header todos={todos} />
          <TodoList todos={todos} />
          <Form updateTodos={updateTodos}/>
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
